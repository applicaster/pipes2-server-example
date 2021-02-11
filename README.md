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

## Covered Content entities

**Series** - A set of regularly presented television episodes each of which is complete in itself. Series' episodes can be grouped into seasons

**Episode** - A part of series. Can be presented as VOD, Live or in the future.

**Program** - An item in an EPG can be, program, movie, special event and can
refer to an item that was already broadcasted, that is currently on air or that
is going to run in the future.

## Covered UX patterns



### Home / Discover 
#### Featured

**API:** `/collections/homeFeatured`
**Description:** A hand picked collection of featured items (can be of any type)

#### On Now

**API:** `/media?byIsLive=true&sortBy=secondsFromBroadcast&limit=6`
**Description:** 
Get content that is running now.


#### Latest Catchup
**API:** `/media/?byAlreadyBroadcasted=true&sortBy=secondsFromBroadcast&limit=10`

#### Coming soon

**API:** `/media/?byIsComingSoon=true&sortBy=secondsFromBroadcast&limit=10`

#### My Favorites

**API:** `user/collections/myFavorites`



#### Featured In Drama

**API:** `/collections/featuredDrama`
**Description:** A hand picked collection of drama series.
It's easier to create a manual collection as it's easier to control what items will be present and in what order.

#### Featured In Action

**API:** `/collections/featuredAction`
**Description:** A hand picked collection of action series
It's easier to create a manual collection as it's easier to control what items will be present and in what order.


#### Browse By Genre
**API:** `/collections/genres`
**Description:** A hand picked collection of promoted genres
It's easier to create a manual collection as it's easier to control what items will be present and in what order.

#### Browse By Channel
**API:** `/collections/channels`
**Description:** A hand picked collection of promoted channels
It's easier to create a manual collection as it's easier to control what items will be present and in what order.


---


### Browse 

#### Search - free text

**API:** `/media/?q=<SEARCH_TEXT>`
**Description:** Free text search

#### Browse By Topic

**API:** `/collections/browseByTopic`
**Description:** A hand picked collection of promoted channels


#### Browse By Genre
see home

### TV Guide (Multi)

#### Browse By Channel
see home

### TV Guide (Single)

**API:** `/epg/days-of-the-week?channel=<CHANNEL_ID>` (for tabs)

**API:** `/epg?day=<DAY_INDEX>&channel=<CHANNEL_ID>` (Per tab - day index is from 0 - 6) 

#### Now on (per channel)
**API:** `/epg?day=<DAY_INDEX>&channel=<CHANNEL_ID>&broadcastStatus=now` (Per tab - day index is from 0 - 6) 

**Description:** List of programs for a specific day for a specific channel 
---


### Coming Soon

#### On Now

see home

#### Coming soon

see home

### 6. Channel Screen

#### Now on (per channel)
see EPG

#### Channel Top series
`/media/?byType=series&channel=channelId&tags=top`


### 7. Series Screen


#### Show Info

#### Episodes per season

**API:** `/media/?byType=episode&bySeriesNumber=<SERIES_ID>&sortBy=episodeNumber&feedTitle=<SEASON_TITLE>`


#### Popular Series

**API:** `/collections/popular-series`


#### Popular Movies

**API:** `/collections/poplar-movies`
----

### Series



- Get All Series.

- Get All Episodes by series Id and Season number.

- Get a specific episode by Ids.


### Edge cases

- Get an empty feed

- Context keys - Get items by device type
