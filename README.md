## angular-feather
###### _Feather icons for angular applications_

[![npm](https://img.shields.io/npm/v/angular-feather.svg)]()
[![npm](https://img.shields.io/npm/l/angular-feather.svg)]()

### Description

Simply beautiful SVG icons for your angular applications. 

This package allows you to use the [Feather Icons](https://feathericons.com/) in your angular applications. The icons are designed by Cole Bemis.

Import only the icons you need.

### Usage

  _1. Install the package_
  
  ```sh
  npm install angular-feather
  ```
  
  _2. Import the icons you need_
  
  Import the icons _a la carte_ in the angular module of your needs.
  
  ```ts
  @NgModule({
    imports: [
      IconAlertTriangle
    ]
  })
  export class MyFancyModule { }
  ```
  
  _3. Use it in template_
  
  ```html
  <i-alert-triangle></i-alert-triangle>
  ```
    
Refer to the table below for the list of all available icons.

|     | Icon  | Symbol to import | Component selector |
| --- | ----- | ---------------- | ------------------ |
| ![arrow-down-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-down-left.svg) | `arrow-down-left` | `IconArrowDownLeft` | `<i-arrow-down-left>` |
| ![arrow-down-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-down-right.svg) | `arrow-down-right` | `IconArrowDownRight` | `<i-arrow-down-right>` |
| ![arrow-down](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-down.svg) | `arrow-down` | `IconArrowDown` | `<i-arrow-down>` |
| ![arrow-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-left.svg) | `arrow-left` | `IconArrowLeft` | `<i-arrow-left>` |
| ![arrow-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-right.svg) | `arrow-right` | `IconArrowRight` | `<i-arrow-right>` |
| ![arrow-up-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-up-left.svg) | `arrow-up-left` | `IconArrowUpLeft` | `<i-arrow-up-left>` |
| ![arrow-up-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-up-right.svg) | `arrow-up-right` | `IconArrowUpRight` | `<i-arrow-up-right>` |
| ![arrow-up](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/arrow-up.svg) | `arrow-up` | `IconArrowUp` | `<i-arrow-up>` |
| ![chevron-down](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevron-down.svg) | `chevron-down` | `IconChevronDown` | `<i-chevron-down>` |
| ![chevron-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevron-left.svg) | `chevron-left` | `IconChevronLeft` | `<i-chevron-left>` |
| ![chevron-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevron-right.svg) | `chevron-right` | `IconChevronRight` | `<i-chevron-right>` |
| ![chevron-up](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevron-up.svg) | `chevron-up` | `IconChevronUp` | `<i-chevron-up>` |
| ![chevrons-down](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevrons-down.svg) | `chevrons-down` | `IconChevronsDown` | `<i-chevrons-down>` |
| ![chevrons-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevrons-left.svg) | `chevrons-left` | `IconChevronsLeft` | `<i-chevrons-left>` |
| ![chevrons-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevrons-right.svg) | `chevrons-right` | `IconChevronsRight` | `<i-chevrons-right>` |
| ![chevrons-up](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/chevrons-up.svg) | `chevrons-up` | `IconChevronsUp` | `<i-chevrons-up>` |
| ![corner-down-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-down-left.svg) | `corner-down-left` | `IconCornerDownLeft` | `<i-corner-down-left>` |
| ![corner-down-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-down-right.svg) | `corner-down-right` | `IconCornerDownRight` | `<i-corner-down-right>` |
| ![corner-left-down](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-left-down.svg) | `corner-left-down` | `IconCornerLeftDown` | `<i-corner-left-down>` |
| ![corner-left-up](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-left-up.svg) | `corner-left-up` | `IconCornerLeftUp` | `<i-corner-left-up>` |
| ![corner-right-down](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-right-down.svg) | `corner-right-down` | `IconCornerRightDown` | `<i-corner-right-down>` |
| ![corner-right-up](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-right-up.svg) | `corner-right-up` | `IconCornerRightUp` | `<i-corner-right-up>` |
| ![corner-up-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-up-left.svg) | `corner-up-left` | `IconCornerUpLeft` | `<i-corner-up-left>` |
| ![corner-up-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/arrows/corner-up-right.svg) | `corner-up-right` | `IconCornerUpRight` | `<i-corner-up-right>` |
| ![mail](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/mail.svg) | `mail` | `IconMail` | `<i-mail>` |
| ![message-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/message-circle.svg) | `message-circle` | `IconMessageCircle` | `<i-message-circle>` |
| ![message-square](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/message-square.svg) | `message-square` | `IconMessageSquare` | `<i-message-square>` |
| ![phone-call](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/phone-call.svg) | `phone-call` | `IconPhoneCall` | `<i-phone-call>` |
| ![phone-forwarded](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/phone-forwarded.svg) | `phone-forwarded` | `IconPhoneForwarded` | `<i-phone-forwarded>` |
| ![phone-incoming](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/phone-incoming.svg) | `phone-incoming` | `IconPhoneIncoming` | `<i-phone-incoming>` |
| ![phone-missed](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/phone-missed.svg) | `phone-missed` | `IconPhoneMissed` | `<i-phone-missed>` |
| ![phone-off](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/phone-off.svg) | `phone-off` | `IconPhoneOff` | `<i-phone-off>` |
| ![phone-outgoing](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/phone-outgoing.svg) | `phone-outgoing` | `IconPhoneOutgoing` | `<i-phone-outgoing>` |
| ![phone](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/phone.svg) | `phone` | `IconPhone` | `<i-phone>` |
| ![voicemail](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/communication/voicemail.svg) | `voicemail` | `IconVoicemail` | `<i-voicemail>` |
| ![activity](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/activity.svg) | `activity` | `IconActivity` | `<i-activity>` |
| ![airplay](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/airplay.svg) | `airplay` | `IconAirplay` | `<i-airplay>` |
| ![alert-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/alert-circle.svg) | `alert-circle` | `IconAlertCircle` | `<i-alert-circle>` |
| ![alert-octagon](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/alert-octagon.svg) | `alert-octagon` | `IconAlertOctagon` | `<i-alert-octagon>` |
| ![alert-triangle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/alert-triangle.svg) | `alert-triangle` | `IconAlertTriangle` | `<i-alert-triangle>` |
| ![align-center](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/align-center.svg) | `align-center` | `IconAlignCenter` | `<i-align-center>` |
| ![align-justify](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/align-justify.svg) | `align-justify` | `IconAlignJustify` | `<i-align-justify>` |
| ![align-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/align-left.svg) | `align-left` | `IconAlignLeft` | `<i-align-left>` |
| ![align-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/align-right.svg) | `align-right` | `IconAlignRight` | `<i-align-right>` |
| ![anchor](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/anchor.svg) | `anchor` | `IconAnchor` | `<i-anchor>` |
| ![at-sign](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/at-sign.svg) | `at-sign` | `IconAtSign` | `<i-at-sign>` |
| ![award](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/award.svg) | `award` | `IconAward` | `<i-award>` |
| ![bar-chart-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/bar-chart-2.svg) | `bar-chart-2` | `IconBarChart2` | `<i-bar-chart-2>` |
| ![bar-chart](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/bar-chart.svg) | `bar-chart` | `IconBarChart` | `<i-bar-chart>` |
| ![battery-charging](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/battery-charging.svg) | `battery-charging` | `IconBatteryCharging` | `<i-battery-charging>` |
| ![battery](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/battery.svg) | `battery` | `IconBattery` | `<i-battery>` |
| ![bell-off](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/bell-off.svg) | `bell-off` | `IconBellOff` | `<i-bell-off>` |
| ![bell](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/bell.svg) | `bell` | `IconBell` | `<i-bell>` |
| ![bluetooth](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/bluetooth.svg) | `bluetooth` | `IconBluetooth` | `<i-bluetooth>` |
| ![book](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/book.svg) | `book` | `IconBook` | `<i-book>` |
| ![bookmark](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/bookmark.svg) | `bookmark` | `IconBookmark` | `<i-bookmark>` |
| ![box](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/box.svg) | `box` | `IconBox` | `<i-box>` |
| ![briefcase](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/briefcase.svg) | `briefcase` | `IconBriefcase` | `<i-briefcase>` |
| ![calendar](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/calendar.svg) | `calendar` | `IconCalendar` | `<i-calendar>` |
| ![cast](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/cast.svg) | `cast` | `IconCast` | `<i-cast>` |
| ![check-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/check-circle.svg) | `check-circle` | `IconCheckCircle` | `<i-check-circle>` |
| ![check-square](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/check-square.svg) | `check-square` | `IconCheckSquare` | `<i-check-square>` |
| ![check](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/check.svg) | `check` | `IconCheck` | `<i-check>` |
| ![circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/circle.svg) | `circle` | `IconCircle` | `<i-circle>` |
| ![clipboard](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/clipboard.svg) | `clipboard` | `IconClipboard` | `<i-clipboard>` |
| ![clock](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/clock.svg) | `clock` | `IconClock` | `<i-clock>` |
| ![cloud-off](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/cloud-off.svg) | `cloud-off` | `IconCloudOff` | `<i-cloud-off>` |
| ![cloud](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/cloud.svg) | `cloud` | `IconCloud` | `<i-cloud>` |
| ![command](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/command.svg) | `command` | `IconCommand` | `<i-command>` |
| ![copy](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/copy.svg) | `copy` | `IconCopy` | `<i-copy>` |
| ![cpu](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/cpu.svg) | `cpu` | `IconCpu` | `<i-cpu>` |
| ![credit-card](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/credit-card.svg) | `credit-card` | `IconCreditCard` | `<i-credit-card>` |
| ![delete](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/delete.svg) | `delete` | `IconDelete` | `<i-delete>` |
| ![disc](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/disc.svg) | `disc` | `IconDisc` | `<i-disc>` |
| ![download-cloud](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/download-cloud.svg) | `download-cloud` | `IconDownloadCloud` | `<i-download-cloud>` |
| ![download](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/download.svg) | `download` | `IconDownload` | `<i-download>` |
| ![edit-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/edit-2.svg) | `edit-2` | `IconEdit2` | `<i-edit-2>` |
| ![edit-3](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/edit-3.svg) | `edit-3` | `IconEdit3` | `<i-edit-3>` |
| ![edit](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/edit.svg) | `edit` | `IconEdit` | `<i-edit>` |
| ![external-link](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/external-link.svg) | `external-link` | `IconExternalLink` | `<i-external-link>` |
| ![eye-off](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/eye-off.svg) | `eye-off` | `IconEyeOff` | `<i-eye-off>` |
| ![eye](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/eye.svg) | `eye` | `IconEye` | `<i-eye>` |
| ![feather](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/feather.svg) | `feather` | `IconFeather` | `<i-feather>` |
| ![file-minus](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/file-minus.svg) | `file-minus` | `IconFileMinus` | `<i-file-minus>` |
| ![file-plus](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/file-plus.svg) | `file-plus` | `IconFilePlus` | `<i-file-plus>` |
| ![file-text](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/file-text.svg) | `file-text` | `IconFileText` | `<i-file-text>` |
| ![file](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/file.svg) | `file` | `IconFile` | `<i-file>` |
| ![filter](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/filter.svg) | `filter` | `IconFilter` | `<i-filter>` |
| ![flag](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/flag.svg) | `flag` | `IconFlag` | `<i-flag>` |
| ![folder](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/folder.svg) | `folder` | `IconFolder` | `<i-folder>` |
| ![grid](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/grid.svg) | `grid` | `IconGrid` | `<i-grid>` |
| ![hash](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/hash.svg) | `hash` | `IconHash` | `<i-hash>` |
| ![headphones](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/headphones.svg) | `headphones` | `IconHeadphones` | `<i-headphones>` |
| ![heart](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/heart.svg) | `heart` | `IconHeart` | `<i-heart>` |
| ![home](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/home.svg) | `home` | `IconHome` | `<i-home>` |
| ![inbox](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/inbox.svg) | `inbox` | `IconInbox` | `<i-inbox>` |
| ![info](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/info.svg) | `info` | `IconInfo` | `<i-info>` |
| ![layers](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/layers.svg) | `layers` | `IconLayers` | `<i-layers>` |
| ![layout](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/layout.svg) | `layout` | `IconLayout` | `<i-layout>` |
| ![life-buoy](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/life-buoy.svg) | `life-buoy` | `IconLifeBuoy` | `<i-life-buoy>` |
| ![link-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/link-2.svg) | `link-2` | `IconLink2` | `<i-link-2>` |
| ![link](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/link.svg) | `link` | `IconLink` | `<i-link>` |
| ![list](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/list.svg) | `list` | `IconList` | `<i-list>` |
| ![loader](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/loader.svg) | `loader` | `IconLoader` | `<i-loader>` |
| ![lock](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/lock.svg) | `lock` | `IconLock` | `<i-lock>` |
| ![log-in](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/log-in.svg) | `log-in` | `IconLogIn` | `<i-log-in>` |
| ![log-out](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/log-out.svg) | `log-out` | `IconLogOut` | `<i-log-out>` |
| ![maximize-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/maximize-2.svg) | `maximize-2` | `IconMaximize2` | `<i-maximize-2>` |
| ![maximize](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/maximize.svg) | `maximize` | `IconMaximize` | `<i-maximize>` |
| ![menu](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/menu.svg) | `menu` | `IconMenu` | `<i-menu>` |
| ![mic-off](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/mic-off.svg) | `mic-off` | `IconMicOff` | `<i-mic-off>` |
| ![mic](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/mic.svg) | `mic` | `IconMic` | `<i-mic>` |
| ![minimize-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/minimize-2.svg) | `minimize-2` | `IconMinimize2` | `<i-minimize-2>` |
| ![minimize](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/minimize.svg) | `minimize` | `IconMinimize` | `<i-minimize>` |
| ![minus-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/minus-circle.svg) | `minus-circle` | `IconMinusCircle` | `<i-minus-circle>` |
| ![minus-square](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/minus-square.svg) | `minus-square` | `IconMinusSquare` | `<i-minus-square>` |
| ![minus](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/minus.svg) | `minus` | `IconMinus` | `<i-minus>` |
| ![monitor](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/monitor.svg) | `monitor` | `IconMonitor` | `<i-monitor>` |
| ![more-horizontal](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/more-horizontal.svg) | `more-horizontal` | `IconMoreHorizontal` | `<i-more-horizontal>` |
| ![more-vertical](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/more-vertical.svg) | `more-vertical` | `IconMoreVertical` | `<i-more-vertical>` |
| ![move](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/move.svg) | `move` | `IconMove` | `<i-move>` |
| ![music](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/music.svg) | `music` | `IconMusic` | `<i-music>` |
| ![octagon](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/octagon.svg) | `octagon` | `IconOctagon` | `<i-octagon>` |
| ![package](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/package.svg) | `package` | `IconPackage` | `<i-package>` |
| ![percent](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/percent.svg) | `percent` | `IconPercent` | `<i-percent>` |
| ![pie-chart](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/pie-chart.svg) | `pie-chart` | `IconPieChart` | `<i-pie-chart>` |
| ![plus-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/plus-circle.svg) | `plus-circle` | `IconPlusCircle` | `<i-plus-circle>` |
| ![plus-square](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/plus-square.svg) | `plus-square` | `IconPlusSquare` | `<i-plus-square>` |
| ![plus](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/plus.svg) | `plus` | `IconPlus` | `<i-plus>` |
| ![power](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/power.svg) | `power` | `IconPower` | `<i-power>` |
| ![printer](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/printer.svg) | `printer` | `IconPrinter` | `<i-printer>` |
| ![radio](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/radio.svg) | `radio` | `IconRadio` | `<i-radio>` |
| ![refresh-ccw](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/refresh-ccw.svg) | `refresh-ccw` | `IconRefreshCcw` | `<i-refresh-ccw>` |
| ![refresh-cw](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/refresh-cw.svg) | `refresh-cw` | `IconRefreshCw` | `<i-refresh-cw>` |
| ![rotate-ccw](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/rotate-ccw.svg) | `rotate-ccw` | `IconRotateCcw` | `<i-rotate-ccw>` |
| ![rotate-cw](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/rotate-cw.svg) | `rotate-cw` | `IconRotateCw` | `<i-rotate-cw>` |
| ![save](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/save.svg) | `save` | `IconSave` | `<i-save>` |
| ![scissors](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/scissors.svg) | `scissors` | `IconScissors` | `<i-scissors>` |
| ![search](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/search.svg) | `search` | `IconSearch` | `<i-search>` |
| ![server](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/server.svg) | `server` | `IconServer` | `<i-server>` |
| ![settings](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/settings.svg) | `settings` | `IconSettings` | `<i-settings>` |
| ![share-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/share-2.svg) | `share-2` | `IconShare2` | `<i-share-2>` |
| ![share](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/share.svg) | `share` | `IconShare` | `<i-share>` |
| ![shield](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/shield.svg) | `shield` | `IconShield` | `<i-shield>` |
| ![sidebar](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/sidebar.svg) | `sidebar` | `IconSidebar` | `<i-sidebar>` |
| ![slash](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/slash.svg) | `slash` | `IconSlash` | `<i-slash>` |
| ![smartphone](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/smartphone.svg) | `smartphone` | `IconSmartphone` | `<i-smartphone>` |
| ![speaker](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/speaker.svg) | `speaker` | `IconSpeaker` | `<i-speaker>` |
| ![square](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/square.svg) | `square` | `IconSquare` | `<i-square>` |
| ![star](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/star.svg) | `star` | `IconStar` | `<i-star>` |
| ![tablet](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/tablet.svg) | `tablet` | `IconTablet` | `<i-tablet>` |
| ![tag](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/tag.svg) | `tag` | `IconTag` | `<i-tag>` |
| ![target](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/target.svg) | `target` | `IconTarget` | `<i-target>` |
| ![thumbs-down](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/thumbs-down.svg) | `thumbs-down` | `IconThumbsDown` | `<i-thumbs-down>` |
| ![thumbs-up](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/thumbs-up.svg) | `thumbs-up` | `IconThumbsUp` | `<i-thumbs-up>` |
| ![toggle-left](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/toggle-left.svg) | `toggle-left` | `IconToggleLeft` | `<i-toggle-left>` |
| ![toggle-right](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/toggle-right.svg) | `toggle-right` | `IconToggleRight` | `<i-toggle-right>` |
| ![trash-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/trash-2.svg) | `trash-2` | `IconTrash2` | `<i-trash-2>` |
| ![trash](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/trash.svg) | `trash` | `IconTrash` | `<i-trash>` |
| ![trending-down](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/trending-down.svg) | `trending-down` | `IconTrendingDown` | `<i-trending-down>` |
| ![trending-up](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/trending-up.svg) | `trending-up` | `IconTrendingUp` | `<i-trending-up>` |
| ![triangle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/triangle.svg) | `triangle` | `IconTriangle` | `<i-triangle>` |
| ![type](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/type.svg) | `type` | `IconType` | `<i-type>` |
| ![unlock](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/unlock.svg) | `unlock` | `IconUnlock` | `<i-unlock>` |
| ![upload-cloud](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/upload-cloud.svg) | `upload-cloud` | `IconUploadCloud` | `<i-upload-cloud>` |
| ![upload](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/upload.svg) | `upload` | `IconUpload` | `<i-upload>` |
| ![user-check](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/user-check.svg) | `user-check` | `IconUserCheck` | `<i-user-check>` |
| ![user-minus](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/user-minus.svg) | `user-minus` | `IconUserMinus` | `<i-user-minus>` |
| ![user-plus](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/user-plus.svg) | `user-plus` | `IconUserPlus` | `<i-user-plus>` |
| ![user-x](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/user-x.svg) | `user-x` | `IconUserX` | `<i-user-x>` |
| ![user](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/user.svg) | `user` | `IconUser` | `<i-user>` |
| ![users](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/users.svg) | `users` | `IconUsers` | `<i-users>` |
| ![watch](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/watch.svg) | `watch` | `IconWatch` | `<i-watch>` |
| ![wifi](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/wifi.svg) | `wifi` | `IconWifi` | `<i-wifi>` |
| ![x-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/x-circle.svg) | `x-circle` | `IconXCircle` | `<i-x-circle>` |
| ![x-square](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/x-square.svg) | `x-square` | `IconXSquare` | `<i-x-square>` |
| ![x](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/x.svg) | `x` | `IconX` | `<i-x>` |
| ![zap](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/zap.svg) | `zap` | `IconZap` | `<i-zap>` |
| ![zoom-in](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/zoom-in.svg) | `zoom-in` | `IconZoomIn` | `<i-zoom-in>` |
| ![zoom-out](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/core/zoom-out.svg) | `zoom-out` | `IconZoomOut` | `<i-zoom-out>` |
| ![compass](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/location/compass.svg) | `compass` | `IconCompass` | `<i-compass>` |
| ![crosshair](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/location/crosshair.svg) | `crosshair` | `IconCrosshair` | `<i-crosshair>` |
| ![globe](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/location/globe.svg) | `globe` | `IconGlobe` | `<i-globe>` |
| ![map-pin](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/location/map-pin.svg) | `map-pin` | `IconMapPin` | `<i-map-pin>` |
| ![map](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/location/map.svg) | `map` | `IconMap` | `<i-map>` |
| ![navigation-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/location/navigation-2.svg) | `navigation-2` | `IconNavigation2` | `<i-navigation-2>` |
| ![navigation](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/location/navigation.svg) | `navigation` | `IconNavigation` | `<i-navigation>` |
| ![chrome](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/chrome.svg) | `chrome` | `IconChrome` | `<i-chrome>` |
| ![codepen](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/codepen.svg) | `codepen` | `IconCodepen` | `<i-codepen>` |
| ![facebook](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/facebook.svg) | `facebook` | `IconFacebook` | `<i-facebook>` |
| ![github](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/github.svg) | `github` | `IconGithub` | `<i-github>` |
| ![instagram](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/instagram.svg) | `instagram` | `IconInstagram` | `<i-instagram>` |
| ![pocket](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/pocket.svg) | `pocket` | `IconPocket` | `<i-pocket>` |
| ![slack](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/slack.svg) | `slack` | `IconSlack` | `<i-slack>` |
| ![twitter](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/logos/twitter.svg) | `twitter` | `IconTwitter` | `<i-twitter>` |
| ![fast-forward](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/fast-forward.svg) | `fast-forward` | `IconFastForward` | `<i-fast-forward>` |
| ![pause-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/pause-circle.svg) | `pause-circle` | `IconPauseCircle` | `<i-pause-circle>` |
| ![pause](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/pause.svg) | `pause` | `IconPause` | `<i-pause>` |
| ![play-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/play-circle.svg) | `play-circle` | `IconPlayCircle` | `<i-play-circle>` |
| ![play](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/play.svg) | `play` | `IconPlay` | `<i-play>` |
| ![repeat](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/repeat.svg) | `repeat` | `IconRepeat` | `<i-repeat>` |
| ![rewind](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/rewind.svg) | `rewind` | `IconRewind` | `<i-rewind>` |
| ![shuffle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/shuffle.svg) | `shuffle` | `IconShuffle` | `<i-shuffle>` |
| ![skip-back](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/skip-back.svg) | `skip-back` | `IconSkipBack` | `<i-skip-back>` |
| ![skip-forward](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/skip-forward.svg) | `skip-forward` | `IconSkipForward` | `<i-skip-forward>` |
| ![stop-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/stop-circle.svg) | `stop-circle` | `IconStopCircle` | `<i-stop-circle>` |
| ![volume-1](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/volume-1.svg) | `volume-1` | `IconVolume1` | `<i-volume-1>` |
| ![volume-2](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/volume-2.svg) | `volume-2` | `IconVolume2` | `<i-volume-2>` |
| ![volume-x](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/volume-x.svg) | `volume-x` | `IconVolumeX` | `<i-volume-x>` |
| ![volume](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/media-controls/volume.svg) | `volume` | `IconVolume` | `<i-volume>` |
| ![aperture](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/photo-and-video/aperture.svg) | `aperture` | `IconAperture` | `<i-aperture>` |
| ![camera-off](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/photo-and-video/camera-off.svg) | `camera-off` | `IconCameraOff` | `<i-camera-off>` |
| ![camera](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/photo-and-video/camera.svg) | `camera` | `IconCamera` | `<i-camera>` |
| ![film](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/photo-and-video/film.svg) | `film` | `IconFilm` | `<i-film>` |
| ![image](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/photo-and-video/image.svg) | `image` | `IconImage` | `<i-image>` |
| ![video-off](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/photo-and-video/video-off.svg) | `video-off` | `IconVideoOff` | `<i-video-off>` |
| ![video](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/photo-and-video/video.svg) | `video` | `IconVideo` | `<i-video>` |
| ![cloud-drizzle](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/cloud-drizzle.svg) | `cloud-drizzle` | `IconCloudDrizzle` | `<i-cloud-drizzle>` |
| ![cloud-lightning](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/cloud-lightning.svg) | `cloud-lightning` | `IconCloudLightning` | `<i-cloud-lightning>` |
| ![cloud-rain](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/cloud-rain.svg) | `cloud-rain` | `IconCloudRain` | `<i-cloud-rain>` |
| ![cloud-snow](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/cloud-snow.svg) | `cloud-snow` | `IconCloudSnow` | `<i-cloud-snow>` |
| ![droplet](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/droplet.svg) | `droplet` | `IconDroplet` | `<i-droplet>` |
| ![moon](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/moon.svg) | `moon` | `IconMoon` | `<i-moon>` |
| ![sun](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/sun.svg) | `sun` | `IconSun` | `<i-sun>` |
| ![sunrise](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/sunrise.svg) | `sunrise` | `IconSunrise` | `<i-sunrise>` |
| ![sunset](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/sunset.svg) | `sunset` | `IconSunset` | `<i-sunset>` |
| ![thermometer](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/thermometer.svg) | `thermometer` | `IconThermometer` | `<i-thermometer>` |
| ![umbrella](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/umbrella.svg) | `umbrella` | `IconUmbrella` | `<i-umbrella>` |
| ![wind](https://cdn.rawgit.com/michaelbazos/angular-feather/42c5d7ca/docs/icons/weather/wind.svg) | `wind` | `IconWind` | `<i-wind>` |



### License

MIT © [Michael Bazos](mailto:micabazos@gmail.com)
