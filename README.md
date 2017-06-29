## angular-feather-icons

[![npm](https://img.shields.io/npm/v/angular-feather-icons.svg)]()
[![npm](https://img.shields.io/npm/l/angular-feather-icons.svg)]()

### Description

Simply beautiful SVG icons for your angular applications. 

Icons are designed by [Cole Bemis](https://github.com/colebemis/).

### Usage

  _1. Install the package_
  
  ```sh
  npm install angular-feather-icons
  ```
  
  _2. Import the icons you need_
  
  Import the icons _a la carte_ in the angular module of your needs.
  
  ```ts
  @NgModule({
    imports: [
      IconAlertTriangle
    ]
  })
  export class MyIconModule { }
  ```
  
  _3. Use it in template_
  
  ```html
  <i-alert-triangle></i-alert-triangle>
  ```
    
Refer to the table below for the list of all available icons.

| id | Symbol to import | Component selector |
| --- | ---------------- | ------------------ |
| `arrow-down-left` | `IconArrowDownLeft` | `<i-arrow-down-left>` |
| `arrow-down-right` | `IconArrowDownRight` | `<i-arrow-down-right>` |
| `arrow-down` | `IconArrowDown` | `<i-arrow-down>` |
| `arrow-left` | `IconArrowLeft` | `<i-arrow-left>` |
| `arrow-right` | `IconArrowRight` | `<i-arrow-right>` |
| `arrow-up-left` | `IconArrowUpLeft` | `<i-arrow-up-left>` |
| `arrow-up-right` | `IconArrowUpRight` | `<i-arrow-up-right>` |
| `arrow-up` | `IconArrowUp` | `<i-arrow-up>` |
| `chevron-down` | `IconChevronDown` | `<i-chevron-down>` |
| `chevron-left` | `IconChevronLeft` | `<i-chevron-left>` |
| `chevron-right` | `IconChevronRight` | `<i-chevron-right>` |
| `chevron-up` | `IconChevronUp` | `<i-chevron-up>` |
| `chevrons-down` | `IconChevronsDown` | `<i-chevrons-down>` |
| `chevrons-left` | `IconChevronsLeft` | `<i-chevrons-left>` |
| `chevrons-right` | `IconChevronsRight` | `<i-chevrons-right>` |
| `chevrons-up` | `IconChevronsUp` | `<i-chevrons-up>` |
| `corner-down-left` | `IconCornerDownLeft` | `<i-corner-down-left>` |
| `corner-down-right` | `IconCornerDownRight` | `<i-corner-down-right>` |
| `corner-left-down` | `IconCornerLeftDown` | `<i-corner-left-down>` |
| `corner-left-up` | `IconCornerLeftUp` | `<i-corner-left-up>` |
| `corner-right-down` | `IconCornerRightDown` | `<i-corner-right-down>` |
| `corner-right-up` | `IconCornerRightUp` | `<i-corner-right-up>` |
| `corner-up-left` | `IconCornerUpLeft` | `<i-corner-up-left>` |
| `corner-up-right` | `IconCornerUpRight` | `<i-corner-up-right>` |
| `mail` | `IconMail` | `<i-mail>` |
| `message-circle` | `IconMessageCircle` | `<i-message-circle>` |
| `message-square` | `IconMessageSquare` | `<i-message-square>` |
| `phone-call` | `IconPhoneCall` | `<i-phone-call>` |
| `phone-forwarded` | `IconPhoneForwarded` | `<i-phone-forwarded>` |
| `phone-incoming` | `IconPhoneIncoming` | `<i-phone-incoming>` |
| `phone-missed` | `IconPhoneMissed` | `<i-phone-missed>` |
| `phone-off` | `IconPhoneOff` | `<i-phone-off>` |
| `phone-outgoing` | `IconPhoneOutgoing` | `<i-phone-outgoing>` |
| `phone` | `IconPhone` | `<i-phone>` |
| `voicemail` | `IconVoicemail` | `<i-voicemail>` |
| `activity` | `IconActivity` | `<i-activity>` |
| `airplay` | `IconAirplay` | `<i-airplay>` |
| `alert-circle` | `IconAlertCircle` | `<i-alert-circle>` |
| `alert-octagon` | `IconAlertOctagon` | `<i-alert-octagon>` |
| `alert-triangle` | `IconAlertTriangle` | `<i-alert-triangle>` |
| `align-center` | `IconAlignCenter` | `<i-align-center>` |
| `align-justify` | `IconAlignJustify` | `<i-align-justify>` |
| `align-left` | `IconAlignLeft` | `<i-align-left>` |
| `align-right` | `IconAlignRight` | `<i-align-right>` |
| `anchor` | `IconAnchor` | `<i-anchor>` |
| `at-sign` | `IconAtSign` | `<i-at-sign>` |
| `award` | `IconAward` | `<i-award>` |
| `bar-chart-2` | `IconBarChart2` | `<i-bar-chart-2>` |
| `bar-chart` | `IconBarChart` | `<i-bar-chart>` |
| `battery-charging` | `IconBatteryCharging` | `<i-battery-charging>` |
| `battery` | `IconBattery` | `<i-battery>` |
| `bell-off` | `IconBellOff` | `<i-bell-off>` |
| `bell` | `IconBell` | `<i-bell>` |
| `bluetooth` | `IconBluetooth` | `<i-bluetooth>` |
| `book` | `IconBook` | `<i-book>` |
| `bookmark` | `IconBookmark` | `<i-bookmark>` |
| `box` | `IconBox` | `<i-box>` |
| `briefcase` | `IconBriefcase` | `<i-briefcase>` |
| `calendar` | `IconCalendar` | `<i-calendar>` |
| `cast` | `IconCast` | `<i-cast>` |
| `check-circle` | `IconCheckCircle` | `<i-check-circle>` |
| `check-square` | `IconCheckSquare` | `<i-check-square>` |
| `check` | `IconCheck` | `<i-check>` |
| `circle` | `IconCircle` | `<i-circle>` |
| `clipboard` | `IconClipboard` | `<i-clipboard>` |
| `clock` | `IconClock` | `<i-clock>` |
| `cloud-off` | `IconCloudOff` | `<i-cloud-off>` |
| `cloud` | `IconCloud` | `<i-cloud>` |
| `command` | `IconCommand` | `<i-command>` |
| `copy` | `IconCopy` | `<i-copy>` |
| `cpu` | `IconCpu` | `<i-cpu>` |
| `credit-card` | `IconCreditCard` | `<i-credit-card>` |
| `delete` | `IconDelete` | `<i-delete>` |
| `disc` | `IconDisc` | `<i-disc>` |
| `download-cloud` | `IconDownloadCloud` | `<i-download-cloud>` |
| `download` | `IconDownload` | `<i-download>` |
| `edit-2` | `IconEdit2` | `<i-edit-2>` |
| `edit-3` | `IconEdit3` | `<i-edit-3>` |
| `edit` | `IconEdit` | `<i-edit>` |
| `external-link` | `IconExternalLink` | `<i-external-link>` |
| `eye-off` | `IconEyeOff` | `<i-eye-off>` |
| `eye` | `IconEye` | `<i-eye>` |
| `feather` | `IconFeather` | `<i-feather>` |
| `file-minus` | `IconFileMinus` | `<i-file-minus>` |
| `file-plus` | `IconFilePlus` | `<i-file-plus>` |
| `file-text` | `IconFileText` | `<i-file-text>` |
| `file` | `IconFile` | `<i-file>` |
| `filter` | `IconFilter` | `<i-filter>` |
| `flag` | `IconFlag` | `<i-flag>` |
| `folder` | `IconFolder` | `<i-folder>` |
| `grid` | `IconGrid` | `<i-grid>` |
| `hash` | `IconHash` | `<i-hash>` |
| `headphones` | `IconHeadphones` | `<i-headphones>` |
| `heart` | `IconHeart` | `<i-heart>` |
| `home` | `IconHome` | `<i-home>` |
| `inbox` | `IconInbox` | `<i-inbox>` |
| `info` | `IconInfo` | `<i-info>` |
| `layers` | `IconLayers` | `<i-layers>` |
| `layout` | `IconLayout` | `<i-layout>` |
| `life-buoy` | `IconLifeBuoy` | `<i-life-buoy>` |
| `link-2` | `IconLink2` | `<i-link-2>` |
| `link` | `IconLink` | `<i-link>` |
| `list` | `IconList` | `<i-list>` |
| `loader` | `IconLoader` | `<i-loader>` |
| `lock` | `IconLock` | `<i-lock>` |
| `log-in` | `IconLogIn` | `<i-log-in>` |
| `log-out` | `IconLogOut` | `<i-log-out>` |
| `maximize-2` | `IconMaximize2` | `<i-maximize-2>` |
| `maximize` | `IconMaximize` | `<i-maximize>` |
| `menu` | `IconMenu` | `<i-menu>` |
| `mic-off` | `IconMicOff` | `<i-mic-off>` |
| `mic` | `IconMic` | `<i-mic>` |
| `minimize-2` | `IconMinimize2` | `<i-minimize-2>` |
| `minimize` | `IconMinimize` | `<i-minimize>` |
| `minus-circle` | `IconMinusCircle` | `<i-minus-circle>` |
| `minus-square` | `IconMinusSquare` | `<i-minus-square>` |
| `minus` | `IconMinus` | `<i-minus>` |
| `monitor` | `IconMonitor` | `<i-monitor>` |
| `more-horizontal` | `IconMoreHorizontal` | `<i-more-horizontal>` |
| `more-vertical` | `IconMoreVertical` | `<i-more-vertical>` |
| `move` | `IconMove` | `<i-move>` |
| `music` | `IconMusic` | `<i-music>` |
| `octagon` | `IconOctagon` | `<i-octagon>` |
| `package` | `IconPackage` | `<i-package>` |
| `percent` | `IconPercent` | `<i-percent>` |
| `pie-chart` | `IconPieChart` | `<i-pie-chart>` |
| `plus-circle` | `IconPlusCircle` | `<i-plus-circle>` |
| `plus-square` | `IconPlusSquare` | `<i-plus-square>` |
| `plus` | `IconPlus` | `<i-plus>` |
| `power` | `IconPower` | `<i-power>` |
| `printer` | `IconPrinter` | `<i-printer>` |
| `radio` | `IconRadio` | `<i-radio>` |
| `refresh-ccw` | `IconRefreshCcw` | `<i-refresh-ccw>` |
| `refresh-cw` | `IconRefreshCw` | `<i-refresh-cw>` |
| `rotate-ccw` | `IconRotateCcw` | `<i-rotate-ccw>` |
| `rotate-cw` | `IconRotateCw` | `<i-rotate-cw>` |
| `save` | `IconSave` | `<i-save>` |
| `scissors` | `IconScissors` | `<i-scissors>` |
| `search` | `IconSearch` | `<i-search>` |
| `server` | `IconServer` | `<i-server>` |
| `settings` | `IconSettings` | `<i-settings>` |
| `share-2` | `IconShare2` | `<i-share-2>` |
| `share` | `IconShare` | `<i-share>` |
| `shield` | `IconShield` | `<i-shield>` |
| `sidebar` | `IconSidebar` | `<i-sidebar>` |
| `slash` | `IconSlash` | `<i-slash>` |
| `smartphone` | `IconSmartphone` | `<i-smartphone>` |
| `speaker` | `IconSpeaker` | `<i-speaker>` |
| `square` | `IconSquare` | `<i-square>` |
| `star` | `IconStar` | `<i-star>` |
| `tablet` | `IconTablet` | `<i-tablet>` |
| `tag` | `IconTag` | `<i-tag>` |
| `target` | `IconTarget` | `<i-target>` |
| `thumbs-down` | `IconThumbsDown` | `<i-thumbs-down>` |
| `thumbs-up` | `IconThumbsUp` | `<i-thumbs-up>` |
| `toggle-left` | `IconToggleLeft` | `<i-toggle-left>` |
| `toggle-right` | `IconToggleRight` | `<i-toggle-right>` |
| `trash-2` | `IconTrash2` | `<i-trash-2>` |
| `trash` | `IconTrash` | `<i-trash>` |
| `trending-down` | `IconTrendingDown` | `<i-trending-down>` |
| `trending-up` | `IconTrendingUp` | `<i-trending-up>` |
| `triangle` | `IconTriangle` | `<i-triangle>` |
| `type` | `IconType` | `<i-type>` |
| `unlock` | `IconUnlock` | `<i-unlock>` |
| `upload-cloud` | `IconUploadCloud` | `<i-upload-cloud>` |
| `upload` | `IconUpload` | `<i-upload>` |
| `user-check` | `IconUserCheck` | `<i-user-check>` |
| `user-minus` | `IconUserMinus` | `<i-user-minus>` |
| `user-plus` | `IconUserPlus` | `<i-user-plus>` |
| `user-x` | `IconUserX` | `<i-user-x>` |
| `user` | `IconUser` | `<i-user>` |
| `users` | `IconUsers` | `<i-users>` |
| `watch` | `IconWatch` | `<i-watch>` |
| `wifi` | `IconWifi` | `<i-wifi>` |
| `x-circle` | `IconXCircle` | `<i-x-circle>` |
| `x-square` | `IconXSquare` | `<i-x-square>` |
| `x` | `IconX` | `<i-x>` |
| `zap` | `IconZap` | `<i-zap>` |
| `zoom-in` | `IconZoomIn` | `<i-zoom-in>` |
| `zoom-out` | `IconZoomOut` | `<i-zoom-out>` |
| `compass` | `IconCompass` | `<i-compass>` |
| `crosshair` | `IconCrosshair` | `<i-crosshair>` |
| `globe` | `IconGlobe` | `<i-globe>` |
| `map-pin` | `IconMapPin` | `<i-map-pin>` |
| `map` | `IconMap` | `<i-map>` |
| `navigation-2` | `IconNavigation2` | `<i-navigation-2>` |
| `navigation` | `IconNavigation` | `<i-navigation>` |
| `chrome` | `IconChrome` | `<i-chrome>` |
| `codepen` | `IconCodepen` | `<i-codepen>` |
| `facebook` | `IconFacebook` | `<i-facebook>` |
| `github` | `IconGithub` | `<i-github>` |
| `instagram` | `IconInstagram` | `<i-instagram>` |
| `pocket` | `IconPocket` | `<i-pocket>` |
| `slack` | `IconSlack` | `<i-slack>` |
| `twitter` | `IconTwitter` | `<i-twitter>` |
| `fast-forward` | `IconFastForward` | `<i-fast-forward>` |
| `pause-circle` | `IconPauseCircle` | `<i-pause-circle>` |
| `pause` | `IconPause` | `<i-pause>` |
| `play-circle` | `IconPlayCircle` | `<i-play-circle>` |
| `play` | `IconPlay` | `<i-play>` |
| `repeat` | `IconRepeat` | `<i-repeat>` |
| `rewind` | `IconRewind` | `<i-rewind>` |
| `shuffle` | `IconShuffle` | `<i-shuffle>` |
| `skip-back` | `IconSkipBack` | `<i-skip-back>` |
| `skip-forward` | `IconSkipForward` | `<i-skip-forward>` |
| `stop-circle` | `IconStopCircle` | `<i-stop-circle>` |
| `volume-1` | `IconVolume1` | `<i-volume-1>` |
| `volume-2` | `IconVolume2` | `<i-volume-2>` |
| `volume-x` | `IconVolumeX` | `<i-volume-x>` |
| `volume` | `IconVolume` | `<i-volume>` |
| `aperture` | `IconAperture` | `<i-aperture>` |
| `camera-off` | `IconCameraOff` | `<i-camera-off>` |
| `camera` | `IconCamera` | `<i-camera>` |
| `film` | `IconFilm` | `<i-film>` |
| `image` | `IconImage` | `<i-image>` |
| `video-off` | `IconVideoOff` | `<i-video-off>` |
| `video` | `IconVideo` | `<i-video>` |
| `cloud-drizzle` | `IconCloudDrizzle` | `<i-cloud-drizzle>` |
| `cloud-lightning` | `IconCloudLightning` | `<i-cloud-lightning>` |
| `cloud-rain` | `IconCloudRain` | `<i-cloud-rain>` |
| `cloud-snow` | `IconCloudSnow` | `<i-cloud-snow>` |
| `droplet` | `IconDroplet` | `<i-droplet>` |
| `moon` | `IconMoon` | `<i-moon>` |
| `sun` | `IconSun` | `<i-sun>` |
| `sunrise` | `IconSunrise` | `<i-sunrise>` |
| `sunset` | `IconSunset` | `<i-sunset>` |
| `thermometer` | `IconThermometer` | `<i-thermometer>` |
| `umbrella` | `IconUmbrella` | `<i-umbrella>` |
| `wind` | `IconWind` | `<i-wind>` |



### License

MIT © [Michael Bazos](mailto:micabazos@gmail.com)
