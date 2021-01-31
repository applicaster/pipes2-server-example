# Pipes V2 Server Example

In the repo you will find an `express.js` app that implements the `Zapp Pipes V2 Protocol`.
For more information please go to https://docs.applicaster.com/integrations/pipes2-endpoint-implementation-guide

The API covers a few common feeds for Broadcaster APIs - feel free to poke around.

All API calls are document using the Open API standard:

- https://pipes2-server-example.herokuapp.com/api-docs
- OR when running locally at http://localhost:3000/api-docs

## Run locally

`$ npm install`
`$ npm run dev`


## Covered UX patterns

### Series

- Get All Series.

- Get All Episodes by series Id and Season number.

- Get a specific episode by Ids.


### Edge cases

- Get an empty feed

- Context keys - Get items by device type
