module.exports = [
  {
    name: "application",
    deps: ["vendor/jquery-3.3.1.min", "vendor/crds-shared-header-v0.8.4.min"],
    files: ["lib/set-redirect-url"]
  },
  {
    name: "application_deferred",
    deps: [
      "vendor/webcomponents-lite.min",
      "vendor/imgix.min",
      "vendor/imgix-optimizer",
      "vendor/bootstrap.min",
      "vendor/flickity.pkgd.min",
      "vendor/crds-card-carousel-v0.2.0.min",
      "vendor/crds-jumbotron-video-v0.2.1.min",
      "vendor/crds-livestream-reminder-v0.0.16.min",
      "vendor/crds-rollcall.min",
      "vendor/crds-status-message-v0.1.3.min",
      "vendor/feature-flags.min",
      "vendor/isotope.min",
      "vendor/smart-app-banner-2.0.0.min"
    ],
    files: [
      "lib/location-finder",
      "lib/distance-sorter",
      "lib/data-tracker",
      "lib/environment",
      "lib/card-filters",
      "lib/height-watcher",
      "lib/smooth-scroller",
      "components/legacy-imgix",
      "components/header",
      "components/images",
      "components/carousels",
      "components/countdown",
      "components/jumbotron-video",
      "components/filters",
      "components/simple-fred",
      "components/smart-banner",
      "components/status-message",
      "components/global"
    ]
  },
  {
    name: "masonry_deferred",
    files: ["components/masonry"]
  },
  {
    name: "set-redirect-url",
    files: ["lib/set-redirect-url"]
  },
  {
    name: "auth-required",
    files: ["lib/auth-required"]
  },
  {
    name: "reachout-trip",
    files: [
      "lib/reachout-trip"
    ]
  },
  {
    name: "family-meeting-stream",
    files: ["views/family-meeting-stream"]
  },
  {
    name: "live",
    files: ["views/live"]
  },
  {
    name: "location-search",
    files: ["components/location-search"]
  },
  {
    name: "live-stream",
    files: ["views/live-stream"]
  },
  {
    name: "explore",
    deps: [
      "vendor/jquery.fullPage-2.7.4.min",
      "vendor/tweenMax-1.18.0.min",
      "vendor/animations.min"
    ]
  },
  {
    name: "ash-wednesday-experience",
    deps: [
      "vendor/jquery.fullPage-2.7.4.min",
      "vendor/tweenMax-1.18.0.min",
      "vendor/animations.min",
      "vendor/ash-wednesday-experience"
    ]
  },
  {
    name: "events",
    files: [
      "vendor/jquery.cycle2.min",
      "vendor/scrollVert.min",
      "vendor/events.min"
    ]
  }
];
