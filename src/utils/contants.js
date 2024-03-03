const GOOGLE_API_KEY = "AIzaSyCi3JbdNDbZu846xdf0_lN1uYeYQLfN-88";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const comments = [
  {
    name: "XYZ",
    id: 1,
    text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit u",
    replies: [
      {
        name: "abc",
        id: 2,
        text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ",
        replies: [],
      },
      {
        name: "abc",
        id: 3,
        text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit",
        replies: [],
      },
      {
        name: "abc",
        id: 4,
        text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
        replies: [],
      },
    ],
  },
  {
    name: "XYZ",
    id: 5,
    text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
    replies: [
      {
        name: "abc",
        id: 6,
        text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
        replies: [],
      },
      {
        name: "abc",
        id: 7,
        text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
        replies: [],
      },
      {
        name: "abc",
        id: 8,
        text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
        replies: [
          {
            name: "abc",
            id: 9,
            text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
            replies: [
              {
                name: "abc",
                id: 10,
                text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
                replies: [],
              },
            ],
          },
          {
            name: "abc",
            id: 11,
            text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "XYZ",
    id: 12,
    text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
    replies: [],
  },
  {
    name: "XYZ",
    id: 13,
    text: "Duis sint aute commodo irure velit ad consequat commodo labore labore laborum laboris mollit ut",
    replies: [],
  },
];
