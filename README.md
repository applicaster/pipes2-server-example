# Pipes V2 Server Example

In the repo you will find an `express.js` app that implements the `Zapp Pipes V2 Protocol`.
For more information please go to https://docs.applicaster.com/integrations/pipes2-endpoint-implementation-guide

The API covers a few common feeds for Broadcaster APIs - feel free to poke around.

All API calls are document using the Open API standard:

- https://pipes2-server-example.herokuapp.com/api-docs
- OR when running locally at http://localhost:3000/api-docs

## Run locally



`$ npm install`
`$ npm run build` - this will seed the mock db of the project

`$ npm run dev`

## Deployment

Deployment is done automatically by Heroku when merged to `master`

## Covered Content entities

**Series** - A set of regularly presented television episodes each of which is complete in itself. Series' episodes can be grouped into seasons

**Episode** - A part of series. Can be presented as VOD, Live or in the future.

**Program** - An item in an EPG can be, program, movie, special event and can
refer to an item that was already broadcasted, that is currently on air or that
is going to run in the future.

**Channel** - Holds live feed of episodes. A series belongs to a channel.

**Genre** - A series is categorized by a channel.


