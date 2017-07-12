// Known bug
// when the time chosen by the user is past midnight, the differennce btw "now" and chosen time is negative, as this.props.time is interpreted at "last night"
popup.js:25460 this.props.time: Thu Jul 06 2017 04:42:59 GMT-0400 (EDT); 
                this.state.now: Thu Jul 06 2017 16:44:15 GMT-0400 (EDT)

                