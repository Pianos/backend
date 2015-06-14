# backend
Express app for Piano. Push. Play. piano data.

# Data

*pianoName*: {

  "lon":*longitude*,

  "lat":*latitude*,

  "title":  *title used in app - very short*,

  "image": *URL of image used in app - 828w × 1282h*,

  "bio": *short description*,

  "url": *target on the main web site*
}

##Constraints

*pianoName* must match
* the name used in the iBeacon definition in the Gimbal dashboard
* the name used for the iBeacon definition in UA dashboard
* the portion of the notification tags
* the portion of the application deep links
* the portion of the QR code URL & image
* the target URL of the piano's information page

Example:
debussy

|Name | Value|
| ---- | ----------|
| Gimball iBeacon name | debussy|
| UA iBeacon name | debussy|
| UA notification tag | beacon-visited-debussy |
| UA deep link | pianos.push://checkIn/debussy/ |
| QR code URL | http://bit.ly/ppp_debussy |
| QR code image | bitly_ppp_debussy.png |
| target URL | www.pianopushplay.com/pianos/debussy/ |

###Question - should the deep link be a capital I in "checkIn"? the test app had one



# Deployment

Deploy on heroku per the usual instructions (See the tutorial at
  https://devcenter.heroku.com/articles/getting-started-with-nodej).

Update the DNS records at the relevant places to have the app appear at
  http://api.pianopushplay.com
