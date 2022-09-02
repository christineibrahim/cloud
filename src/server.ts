import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import * as AWS from './aws';
import { requireAuth,  requestToken} from './auth';


(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  app.get( "/filteredimage", 
    async (req, res) => {
      let image_url = req.query.image_url;
    
      //    1. validate the image_url query
      if (!image_url) {
        return res.status(400).send("BAD REQUEST: Missing image_url query paramater.");
      }

      //    2. call filterImageFromURL(image_url) to filter the 
      const url = AWS.getGetSignedUrl(image_url);
      const filterImageRes = filterImageFromURL(url);
      const filteredpath = (await filterImageRes).toString();
  
      //    3. send the resulting file in the response
      res.sendFile(filteredpath, () => {
        //    4. deletes any files on the server on finish of the response
        deleteLocalFiles([filteredpath]); 
      }); 
  });
  //! END @TODO1
  
  // Root Endpoint
  // Get same as filteredimage but with requireAuth
  app.get( "/filteredimagewithauth", requireAuth,
    async (req, res) => {
      res.redirect('filteredimage?image_url='+req.query.image_url)
  });
  
  // Root Endpoint
  // Get static token to simulate requireAuth
  app.get( "/gettoken", async ( req, res ) => {
    res.send(requestToken())
  } );

  // Root Endpoint
  // Get static token to simulate requireAuth
  app.get( "/checkstaticheadertoken", requireAuth, async ( req, res ) => {
    res.send('done!!')
  } );

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();