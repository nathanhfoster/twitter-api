import React from "react";
import App from "./App";
import store from "./store/index";
import { getCollectionList } from "./actions/App";
import axios from "axios";
import C from "./constants";

const Axios = axios.create({
  withCredentials: true,
  baseURL:
    "https://ga2pbkjmo5.execute-api.us-west-1.amazonaws.com/coredeployment/",
  timeout: 10000,
  async: true,
  crossDomain: true,
  mode: "cors",
  headers: {
    id: "custom-539487832448843776",
    "Cache-Control": "no-cache",
    "Content-type": "application/json",
    Accept: "application/json",
    screen_name: "johnydoestres"
  }
});

it("getsFavoriteList", () => {
  const collectionList = {
    objects: {
      users: {
        "974025606080880640": {
          id: 974025606080880600,
          id_str: "974025606080880640",
          name: "johny does tress",
          screen_name: "johnydoestres",
          location: "",
          description: "",
          url: null,
          entities: { description: { urls: [] } },
          protected: false,
          followers_count: 0,
          friends_count: 5,
          listed_count: 0,
          created_at: "Wed Mar 14 20:52:55 +0000 2018",
          favourites_count: 5,
          utc_offset: null,
          time_zone: null,
          geo_enabled: false,
          verified: false,
          statuses_count: 13,
          lang: "en",
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: "F5F8FA",
          profile_background_image_url: null,
          profile_background_image_url_https: null,
          profile_background_tile: false,
          profile_image_url:
            "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
          profile_image_url_https:
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
          profile_link_color: "1DA1F2",
          profile_sidebar_border_color: "C0DEED",
          profile_sidebar_fill_color: "DDEEF6",
          profile_text_color: "333333",
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: true,
          default_profile_image: true,
          following: false,
          follow_request_sent: false,
          notifications: false,
          translator_type: "none"
        }
      },
      timelines: {
        "custom-1059894165448740864": {
          name: "MTB",
          user_id: "974025606080880640",
          collection_url:
            "https://twitter.com/johnydoestres/timelines/1059894165448740864",
          custom_timeline_url:
            "https://twitter.com/johnydoestres/timelines/1059894165448740864",
          description: "BIKES THAT SEND ",
          url: "",
          visibility: "public",
          timeline_order: "curation_reverse_chron",
          collection_type: "user",
          custom_timeline_type: "user"
        }
      }
    },
    response: {
      results: [{ timeline_id: "custom-1059894165448740864" }],
      cursors: { next_cursor: "DrWAIL8U0AA" }
    }
  };
  const data = Axios.get("collectionlist").then(res => {
    expect(res.data).toEqual(collectionList);
  });
});
