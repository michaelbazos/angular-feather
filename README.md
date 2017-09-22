## angular-feather

[![npm](https://img.shields.io/npm/v/angular-feather.svg?style=flat-square)]()
[![license](https://img.shields.io/npm/l/angular-feather.svg?style=flat-square)]()
[![stars](https://img.shields.io/github/stars/michaelbazos/angular-feather.svg?style=flat-square)]()
[![deps status](https://david-dm.org/michaelbazos/angular-feather/status.svg?style=flat-square)](https://david-dm.org/michaelbazos/angular-feather)

### Description

This package allows you to use the [Feather Icons](https://github.com/colebemis/feather) in your angular applications. The icons are designed by Cole Bemis.

Import only the icons you need.

### Usage

_1. Install the package_

```sh
npm install angular-feather
```
  
_2. Import the icons you need_
  
Import the icons _a la carte_. Keep consistency by defining an `IconsModule`. As this angular module doesn't use the icons, it only uses the `exports` array property to export the icons your feature module need. Therefore you deal only with the aggregation `IconsModule` when you need to import icons in feature modules.

```ts  
import { NgModule } from '@angular/core';

import { IconLogIn, IconLogOut, IconUser } from 'angular-feather';

@NgModule({
  exports: [
    IconLogIn,
    IconLogOut,
    IconUser
  ]
})
export class IconsModule { }
```

_3. Use it in template_

```html
<i-log-in></i-log-in>
<i-log-out></i-log-out>
<i-user></i-user>
```
    
Refer to the table below for the list of all available icons.

|     | Icon  | Symbol to import | Component selector |
| --- | ----- | ---------------- | ------------------ |
| ![activity](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/activity.svg) | `activity` | `IconActivity` | `<i-activity>` |
| ![airplay](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/airplay.svg) | `airplay` | `IconAirplay` | `<i-airplay>` |
| ![alert-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/alert-circle.svg) | `alert-circle` | `IconAlertCircle` | `<i-alert-circle>` |
| ![alert-octagon](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/alert-octagon.svg) | `alert-octagon` | `IconAlertOctagon` | `<i-alert-octagon>` |
| ![alert-triangle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/alert-triangle.svg) | `alert-triangle` | `IconAlertTriangle` | `<i-alert-triangle>` |
| ![align-center](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/align-center.svg) | `align-center` | `IconAlignCenter` | `<i-align-center>` |
| ![align-justify](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/align-justify.svg) | `align-justify` | `IconAlignJustify` | `<i-align-justify>` |
| ![align-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/align-left.svg) | `align-left` | `IconAlignLeft` | `<i-align-left>` |
| ![align-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/align-right.svg) | `align-right` | `IconAlignRight` | `<i-align-right>` |
| ![anchor](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/anchor.svg) | `anchor` | `IconAnchor` | `<i-anchor>` |
| ![aperture](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/aperture.svg) | `aperture` | `IconAperture` | `<i-aperture>` |
| ![arrow-down-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-down-left.svg) | `arrow-down-left` | `IconArrowDownLeft` | `<i-arrow-down-left>` |
| ![arrow-down-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-down-right.svg) | `arrow-down-right` | `IconArrowDownRight` | `<i-arrow-down-right>` |
| ![arrow-down](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-down.svg) | `arrow-down` | `IconArrowDown` | `<i-arrow-down>` |
| ![arrow-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-left.svg) | `arrow-left` | `IconArrowLeft` | `<i-arrow-left>` |
| ![arrow-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-right.svg) | `arrow-right` | `IconArrowRight` | `<i-arrow-right>` |
| ![arrow-up-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-up-left.svg) | `arrow-up-left` | `IconArrowUpLeft` | `<i-arrow-up-left>` |
| ![arrow-up-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-up-right.svg) | `arrow-up-right` | `IconArrowUpRight` | `<i-arrow-up-right>` |
| ![arrow-up](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/arrow-up.svg) | `arrow-up` | `IconArrowUp` | `<i-arrow-up>` |
| ![at-sign](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/at-sign.svg) | `at-sign` | `IconAtSign` | `<i-at-sign>` |
| ![award](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/award.svg) | `award` | `IconAward` | `<i-award>` |
| ![bar-chart-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/bar-chart-2.svg) | `bar-chart-2` | `IconBarChart2` | `<i-bar-chart-2>` |
| ![bar-chart](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/bar-chart.svg) | `bar-chart` | `IconBarChart` | `<i-bar-chart>` |
| ![battery-charging](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/battery-charging.svg) | `battery-charging` | `IconBatteryCharging` | `<i-battery-charging>` |
| ![battery](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/battery.svg) | `battery` | `IconBattery` | `<i-battery>` |
| ![bell-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/bell-off.svg) | `bell-off` | `IconBellOff` | `<i-bell-off>` |
| ![bell](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/bell.svg) | `bell` | `IconBell` | `<i-bell>` |
| ![bluetooth](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/bluetooth.svg) | `bluetooth` | `IconBluetooth` | `<i-bluetooth>` |
| ![bold](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/bold.svg) | `bold` | `IconBold` | `<i-bold>` |
| ![book](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/book.svg) | `book` | `IconBook` | `<i-book>` |
| ![bookmark](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/bookmark.svg) | `bookmark` | `IconBookmark` | `<i-bookmark>` |
| ![box](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/box.svg) | `box` | `IconBox` | `<i-box>` |
| ![briefcase](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/briefcase.svg) | `briefcase` | `IconBriefcase` | `<i-briefcase>` |
| ![calendar](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/calendar.svg) | `calendar` | `IconCalendar` | `<i-calendar>` |
| ![camera-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/camera-off.svg) | `camera-off` | `IconCameraOff` | `<i-camera-off>` |
| ![camera](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/camera.svg) | `camera` | `IconCamera` | `<i-camera>` |
| ![cast](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cast.svg) | `cast` | `IconCast` | `<i-cast>` |
| ![check-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/check-circle.svg) | `check-circle` | `IconCheckCircle` | `<i-check-circle>` |
| ![check-square](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/check-square.svg) | `check-square` | `IconCheckSquare` | `<i-check-square>` |
| ![check](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/check.svg) | `check` | `IconCheck` | `<i-check>` |
| ![chevron-down](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevron-down.svg) | `chevron-down` | `IconChevronDown` | `<i-chevron-down>` |
| ![chevron-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevron-left.svg) | `chevron-left` | `IconChevronLeft` | `<i-chevron-left>` |
| ![chevron-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevron-right.svg) | `chevron-right` | `IconChevronRight` | `<i-chevron-right>` |
| ![chevron-up](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevron-up.svg) | `chevron-up` | `IconChevronUp` | `<i-chevron-up>` |
| ![chevrons-down](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevrons-down.svg) | `chevrons-down` | `IconChevronsDown` | `<i-chevrons-down>` |
| ![chevrons-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevrons-left.svg) | `chevrons-left` | `IconChevronsLeft` | `<i-chevrons-left>` |
| ![chevrons-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevrons-right.svg) | `chevrons-right` | `IconChevronsRight` | `<i-chevrons-right>` |
| ![chevrons-up](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chevrons-up.svg) | `chevrons-up` | `IconChevronsUp` | `<i-chevrons-up>` |
| ![chrome](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/chrome.svg) | `chrome` | `IconChrome` | `<i-chrome>` |
| ![circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/circle.svg) | `circle` | `IconCircle` | `<i-circle>` |
| ![clipboard](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/clipboard.svg) | `clipboard` | `IconClipboard` | `<i-clipboard>` |
| ![clock](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/clock.svg) | `clock` | `IconClock` | `<i-clock>` |
| ![cloud-drizzle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cloud-drizzle.svg) | `cloud-drizzle` | `IconCloudDrizzle` | `<i-cloud-drizzle>` |
| ![cloud-lightning](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cloud-lightning.svg) | `cloud-lightning` | `IconCloudLightning` | `<i-cloud-lightning>` |
| ![cloud-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cloud-off.svg) | `cloud-off` | `IconCloudOff` | `<i-cloud-off>` |
| ![cloud-rain](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cloud-rain.svg) | `cloud-rain` | `IconCloudRain` | `<i-cloud-rain>` |
| ![cloud-snow](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cloud-snow.svg) | `cloud-snow` | `IconCloudSnow` | `<i-cloud-snow>` |
| ![cloud](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cloud.svg) | `cloud` | `IconCloud` | `<i-cloud>` |
| ![codepen](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/codepen.svg) | `codepen` | `IconCodepen` | `<i-codepen>` |
| ![command](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/command.svg) | `command` | `IconCommand` | `<i-command>` |
| ![compass](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/compass.svg) | `compass` | `IconCompass` | `<i-compass>` |
| ![copy](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/copy.svg) | `copy` | `IconCopy` | `<i-copy>` |
| ![corner-down-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-down-left.svg) | `corner-down-left` | `IconCornerDownLeft` | `<i-corner-down-left>` |
| ![corner-down-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-down-right.svg) | `corner-down-right` | `IconCornerDownRight` | `<i-corner-down-right>` |
| ![corner-left-down](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-left-down.svg) | `corner-left-down` | `IconCornerLeftDown` | `<i-corner-left-down>` |
| ![corner-left-up](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-left-up.svg) | `corner-left-up` | `IconCornerLeftUp` | `<i-corner-left-up>` |
| ![corner-right-down](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-right-down.svg) | `corner-right-down` | `IconCornerRightDown` | `<i-corner-right-down>` |
| ![corner-right-up](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-right-up.svg) | `corner-right-up` | `IconCornerRightUp` | `<i-corner-right-up>` |
| ![corner-up-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-up-left.svg) | `corner-up-left` | `IconCornerUpLeft` | `<i-corner-up-left>` |
| ![corner-up-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/corner-up-right.svg) | `corner-up-right` | `IconCornerUpRight` | `<i-corner-up-right>` |
| ![cpu](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/cpu.svg) | `cpu` | `IconCpu` | `<i-cpu>` |
| ![credit-card](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/credit-card.svg) | `credit-card` | `IconCreditCard` | `<i-credit-card>` |
| ![crop](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/crop.svg) | `crop` | `IconCrop` | `<i-crop>` |
| ![crosshair](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/crosshair.svg) | `crosshair` | `IconCrosshair` | `<i-crosshair>` |
| ![delete](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/delete.svg) | `delete` | `IconDelete` | `<i-delete>` |
| ![disc](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/disc.svg) | `disc` | `IconDisc` | `<i-disc>` |
| ![download-cloud](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/download-cloud.svg) | `download-cloud` | `IconDownloadCloud` | `<i-download-cloud>` |
| ![download](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/download.svg) | `download` | `IconDownload` | `<i-download>` |
| ![droplet](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/droplet.svg) | `droplet` | `IconDroplet` | `<i-droplet>` |
| ![edit-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/edit-2.svg) | `edit-2` | `IconEdit2` | `<i-edit-2>` |
| ![edit-3](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/edit-3.svg) | `edit-3` | `IconEdit3` | `<i-edit-3>` |
| ![edit](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/edit.svg) | `edit` | `IconEdit` | `<i-edit>` |
| ![external-link](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/external-link.svg) | `external-link` | `IconExternalLink` | `<i-external-link>` |
| ![eye-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/eye-off.svg) | `eye-off` | `IconEyeOff` | `<i-eye-off>` |
| ![eye](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/eye.svg) | `eye` | `IconEye` | `<i-eye>` |
| ![facebook](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/facebook.svg) | `facebook` | `IconFacebook` | `<i-facebook>` |
| ![fast-forward](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/fast-forward.svg) | `fast-forward` | `IconFastForward` | `<i-fast-forward>` |
| ![feather](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/feather.svg) | `feather` | `IconFeather` | `<i-feather>` |
| ![file-minus](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/file-minus.svg) | `file-minus` | `IconFileMinus` | `<i-file-minus>` |
| ![file-plus](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/file-plus.svg) | `file-plus` | `IconFilePlus` | `<i-file-plus>` |
| ![file-text](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/file-text.svg) | `file-text` | `IconFileText` | `<i-file-text>` |
| ![file](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/file.svg) | `file` | `IconFile` | `<i-file>` |
| ![film](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/film.svg) | `film` | `IconFilm` | `<i-film>` |
| ![filter](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/filter.svg) | `filter` | `IconFilter` | `<i-filter>` |
| ![flag](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/flag.svg) | `flag` | `IconFlag` | `<i-flag>` |
| ![folder](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/folder.svg) | `folder` | `IconFolder` | `<i-folder>` |
| ![github](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/github.svg) | `github` | `IconGithub` | `<i-github>` |
| ![gitlab](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/gitlab.svg) | `gitlab` | `IconGitlab` | `<i-gitlab>` |
| ![globe](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/globe.svg) | `globe` | `IconGlobe` | `<i-globe>` |
| ![grid](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/grid.svg) | `grid` | `IconGrid` | `<i-grid>` |
| ![hash](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/hash.svg) | `hash` | `IconHash` | `<i-hash>` |
| ![headphones](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/headphones.svg) | `headphones` | `IconHeadphones` | `<i-headphones>` |
| ![heart](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/heart.svg) | `heart` | `IconHeart` | `<i-heart>` |
| ![help-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/help-circle.svg) | `help-circle` | `IconHelpCircle` | `<i-help-circle>` |
| ![home](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/home.svg) | `home` | `IconHome` | `<i-home>` |
| ![image](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/image.svg) | `image` | `IconImage` | `<i-image>` |
| ![inbox](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/inbox.svg) | `inbox` | `IconInbox` | `<i-inbox>` |
| ![info](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/info.svg) | `info` | `IconInfo` | `<i-info>` |
| ![instagram](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/instagram.svg) | `instagram` | `IconInstagram` | `<i-instagram>` |
| ![italic](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/italic.svg) | `italic` | `IconItalic` | `<i-italic>` |
| ![layers](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/layers.svg) | `layers` | `IconLayers` | `<i-layers>` |
| ![layout](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/layout.svg) | `layout` | `IconLayout` | `<i-layout>` |
| ![life-buoy](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/life-buoy.svg) | `life-buoy` | `IconLifeBuoy` | `<i-life-buoy>` |
| ![link-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/link-2.svg) | `link-2` | `IconLink2` | `<i-link-2>` |
| ![link](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/link.svg) | `link` | `IconLink` | `<i-link>` |
| ![list](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/list.svg) | `list` | `IconList` | `<i-list>` |
| ![loader](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/loader.svg) | `loader` | `IconLoader` | `<i-loader>` |
| ![lock](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/lock.svg) | `lock` | `IconLock` | `<i-lock>` |
| ![log-in](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/log-in.svg) | `log-in` | `IconLogIn` | `<i-log-in>` |
| ![log-out](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/log-out.svg) | `log-out` | `IconLogOut` | `<i-log-out>` |
| ![mail](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/mail.svg) | `mail` | `IconMail` | `<i-mail>` |
| ![map-pin](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/map-pin.svg) | `map-pin` | `IconMapPin` | `<i-map-pin>` |
| ![map](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/map.svg) | `map` | `IconMap` | `<i-map>` |
| ![maximize-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/maximize-2.svg) | `maximize-2` | `IconMaximize2` | `<i-maximize-2>` |
| ![maximize](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/maximize.svg) | `maximize` | `IconMaximize` | `<i-maximize>` |
| ![menu](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/menu.svg) | `menu` | `IconMenu` | `<i-menu>` |
| ![message-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/message-circle.svg) | `message-circle` | `IconMessageCircle` | `<i-message-circle>` |
| ![message-square](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/message-square.svg) | `message-square` | `IconMessageSquare` | `<i-message-square>` |
| ![mic-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/mic-off.svg) | `mic-off` | `IconMicOff` | `<i-mic-off>` |
| ![mic](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/mic.svg) | `mic` | `IconMic` | `<i-mic>` |
| ![minimize-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/minimize-2.svg) | `minimize-2` | `IconMinimize2` | `<i-minimize-2>` |
| ![minimize](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/minimize.svg) | `minimize` | `IconMinimize` | `<i-minimize>` |
| ![minus-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/minus-circle.svg) | `minus-circle` | `IconMinusCircle` | `<i-minus-circle>` |
| ![minus-square](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/minus-square.svg) | `minus-square` | `IconMinusSquare` | `<i-minus-square>` |
| ![minus](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/minus.svg) | `minus` | `IconMinus` | `<i-minus>` |
| ![monitor](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/monitor.svg) | `monitor` | `IconMonitor` | `<i-monitor>` |
| ![moon](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/moon.svg) | `moon` | `IconMoon` | `<i-moon>` |
| ![more-horizontal](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/more-horizontal.svg) | `more-horizontal` | `IconMoreHorizontal` | `<i-more-horizontal>` |
| ![more-vertical](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/more-vertical.svg) | `more-vertical` | `IconMoreVertical` | `<i-more-vertical>` |
| ![move](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/move.svg) | `move` | `IconMove` | `<i-move>` |
| ![music](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/music.svg) | `music` | `IconMusic` | `<i-music>` |
| ![navigation-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/navigation-2.svg) | `navigation-2` | `IconNavigation2` | `<i-navigation-2>` |
| ![navigation](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/navigation.svg) | `navigation` | `IconNavigation` | `<i-navigation>` |
| ![octagon](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/octagon.svg) | `octagon` | `IconOctagon` | `<i-octagon>` |
| ![package](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/package.svg) | `package` | `IconPackage` | `<i-package>` |
| ![paperclip](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/paperclip.svg) | `paperclip` | `IconPaperclip` | `<i-paperclip>` |
| ![pause-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/pause-circle.svg) | `pause-circle` | `IconPauseCircle` | `<i-pause-circle>` |
| ![pause](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/pause.svg) | `pause` | `IconPause` | `<i-pause>` |
| ![percent](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/percent.svg) | `percent` | `IconPercent` | `<i-percent>` |
| ![phone-call](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/phone-call.svg) | `phone-call` | `IconPhoneCall` | `<i-phone-call>` |
| ![phone-forwarded](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/phone-forwarded.svg) | `phone-forwarded` | `IconPhoneForwarded` | `<i-phone-forwarded>` |
| ![phone-incoming](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/phone-incoming.svg) | `phone-incoming` | `IconPhoneIncoming` | `<i-phone-incoming>` |
| ![phone-missed](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/phone-missed.svg) | `phone-missed` | `IconPhoneMissed` | `<i-phone-missed>` |
| ![phone-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/phone-off.svg) | `phone-off` | `IconPhoneOff` | `<i-phone-off>` |
| ![phone-outgoing](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/phone-outgoing.svg) | `phone-outgoing` | `IconPhoneOutgoing` | `<i-phone-outgoing>` |
| ![phone](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/phone.svg) | `phone` | `IconPhone` | `<i-phone>` |
| ![pie-chart](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/pie-chart.svg) | `pie-chart` | `IconPieChart` | `<i-pie-chart>` |
| ![play-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/play-circle.svg) | `play-circle` | `IconPlayCircle` | `<i-play-circle>` |
| ![play](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/play.svg) | `play` | `IconPlay` | `<i-play>` |
| ![plus-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/plus-circle.svg) | `plus-circle` | `IconPlusCircle` | `<i-plus-circle>` |
| ![plus-square](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/plus-square.svg) | `plus-square` | `IconPlusSquare` | `<i-plus-square>` |
| ![plus](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/plus.svg) | `plus` | `IconPlus` | `<i-plus>` |
| ![pocket](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/pocket.svg) | `pocket` | `IconPocket` | `<i-pocket>` |
| ![power](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/power.svg) | `power` | `IconPower` | `<i-power>` |
| ![printer](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/printer.svg) | `printer` | `IconPrinter` | `<i-printer>` |
| ![radio](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/radio.svg) | `radio` | `IconRadio` | `<i-radio>` |
| ![refresh-ccw](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/refresh-ccw.svg) | `refresh-ccw` | `IconRefreshCcw` | `<i-refresh-ccw>` |
| ![refresh-cw](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/refresh-cw.svg) | `refresh-cw` | `IconRefreshCw` | `<i-refresh-cw>` |
| ![repeat](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/repeat.svg) | `repeat` | `IconRepeat` | `<i-repeat>` |
| ![rewind](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/rewind.svg) | `rewind` | `IconRewind` | `<i-rewind>` |
| ![rotate-ccw](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/rotate-ccw.svg) | `rotate-ccw` | `IconRotateCcw` | `<i-rotate-ccw>` |
| ![rotate-cw](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/rotate-cw.svg) | `rotate-cw` | `IconRotateCw` | `<i-rotate-cw>` |
| ![save](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/save.svg) | `save` | `IconSave` | `<i-save>` |
| ![scissors](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/scissors.svg) | `scissors` | `IconScissors` | `<i-scissors>` |
| ![search](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/search.svg) | `search` | `IconSearch` | `<i-search>` |
| ![server](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/server.svg) | `server` | `IconServer` | `<i-server>` |
| ![settings](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/settings.svg) | `settings` | `IconSettings` | `<i-settings>` |
| ![share-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/share-2.svg) | `share-2` | `IconShare2` | `<i-share-2>` |
| ![share](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/share.svg) | `share` | `IconShare` | `<i-share>` |
| ![shield](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/shield.svg) | `shield` | `IconShield` | `<i-shield>` |
| ![shopping-cart](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/shopping-cart.svg) | `shopping-cart` | `IconShoppingCart` | `<i-shopping-cart>` |
| ![shuffle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/shuffle.svg) | `shuffle` | `IconShuffle` | `<i-shuffle>` |
| ![sidebar](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/sidebar.svg) | `sidebar` | `IconSidebar` | `<i-sidebar>` |
| ![skip-back](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/skip-back.svg) | `skip-back` | `IconSkipBack` | `<i-skip-back>` |
| ![skip-forward](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/skip-forward.svg) | `skip-forward` | `IconSkipForward` | `<i-skip-forward>` |
| ![slack](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/slack.svg) | `slack` | `IconSlack` | `<i-slack>` |
| ![slash](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/slash.svg) | `slash` | `IconSlash` | `<i-slash>` |
| ![sliders](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/sliders.svg) | `sliders` | `IconSliders` | `<i-sliders>` |
| ![smartphone](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/smartphone.svg) | `smartphone` | `IconSmartphone` | `<i-smartphone>` |
| ![speaker](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/speaker.svg) | `speaker` | `IconSpeaker` | `<i-speaker>` |
| ![square](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/square.svg) | `square` | `IconSquare` | `<i-square>` |
| ![star](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/star.svg) | `star` | `IconStar` | `<i-star>` |
| ![stop-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/stop-circle.svg) | `stop-circle` | `IconStopCircle` | `<i-stop-circle>` |
| ![sun](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/sun.svg) | `sun` | `IconSun` | `<i-sun>` |
| ![sunrise](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/sunrise.svg) | `sunrise` | `IconSunrise` | `<i-sunrise>` |
| ![sunset](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/sunset.svg) | `sunset` | `IconSunset` | `<i-sunset>` |
| ![tablet](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/tablet.svg) | `tablet` | `IconTablet` | `<i-tablet>` |
| ![tag](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/tag.svg) | `tag` | `IconTag` | `<i-tag>` |
| ![target](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/target.svg) | `target` | `IconTarget` | `<i-target>` |
| ![thermometer](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/thermometer.svg) | `thermometer` | `IconThermometer` | `<i-thermometer>` |
| ![thumbs-down](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/thumbs-down.svg) | `thumbs-down` | `IconThumbsDown` | `<i-thumbs-down>` |
| ![thumbs-up](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/thumbs-up.svg) | `thumbs-up` | `IconThumbsUp` | `<i-thumbs-up>` |
| ![toggle-left](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/toggle-left.svg) | `toggle-left` | `IconToggleLeft` | `<i-toggle-left>` |
| ![toggle-right](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/toggle-right.svg) | `toggle-right` | `IconToggleRight` | `<i-toggle-right>` |
| ![trash-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/trash-2.svg) | `trash-2` | `IconTrash2` | `<i-trash-2>` |
| ![trash](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/trash.svg) | `trash` | `IconTrash` | `<i-trash>` |
| ![trending-down](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/trending-down.svg) | `trending-down` | `IconTrendingDown` | `<i-trending-down>` |
| ![trending-up](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/trending-up.svg) | `trending-up` | `IconTrendingUp` | `<i-trending-up>` |
| ![triangle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/triangle.svg) | `triangle` | `IconTriangle` | `<i-triangle>` |
| ![tv](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/tv.svg) | `tv` | `IconTv` | `<i-tv>` |
| ![twitter](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/twitter.svg) | `twitter` | `IconTwitter` | `<i-twitter>` |
| ![type](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/type.svg) | `type` | `IconType` | `<i-type>` |
| ![umbrella](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/umbrella.svg) | `umbrella` | `IconUmbrella` | `<i-umbrella>` |
| ![underline](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/underline.svg) | `underline` | `IconUnderline` | `<i-underline>` |
| ![unlock](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/unlock.svg) | `unlock` | `IconUnlock` | `<i-unlock>` |
| ![upload-cloud](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/upload-cloud.svg) | `upload-cloud` | `IconUploadCloud` | `<i-upload-cloud>` |
| ![upload](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/upload.svg) | `upload` | `IconUpload` | `<i-upload>` |
| ![user-check](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/user-check.svg) | `user-check` | `IconUserCheck` | `<i-user-check>` |
| ![user-minus](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/user-minus.svg) | `user-minus` | `IconUserMinus` | `<i-user-minus>` |
| ![user-plus](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/user-plus.svg) | `user-plus` | `IconUserPlus` | `<i-user-plus>` |
| ![user-x](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/user-x.svg) | `user-x` | `IconUserX` | `<i-user-x>` |
| ![user](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/user.svg) | `user` | `IconUser` | `<i-user>` |
| ![users](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/users.svg) | `users` | `IconUsers` | `<i-users>` |
| ![video-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/video-off.svg) | `video-off` | `IconVideoOff` | `<i-video-off>` |
| ![video](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/video.svg) | `video` | `IconVideo` | `<i-video>` |
| ![voicemail](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/voicemail.svg) | `voicemail` | `IconVoicemail` | `<i-voicemail>` |
| ![volume-1](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/volume-1.svg) | `volume-1` | `IconVolume1` | `<i-volume-1>` |
| ![volume-2](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/volume-2.svg) | `volume-2` | `IconVolume2` | `<i-volume-2>` |
| ![volume-x](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/volume-x.svg) | `volume-x` | `IconVolumeX` | `<i-volume-x>` |
| ![volume](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/volume.svg) | `volume` | `IconVolume` | `<i-volume>` |
| ![watch](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/watch.svg) | `watch` | `IconWatch` | `<i-watch>` |
| ![wifi-off](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/wifi-off.svg) | `wifi-off` | `IconWifiOff` | `<i-wifi-off>` |
| ![wifi](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/wifi.svg) | `wifi` | `IconWifi` | `<i-wifi>` |
| ![wind](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/wind.svg) | `wind` | `IconWind` | `<i-wind>` |
| ![x-circle](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/x-circle.svg) | `x-circle` | `IconXCircle` | `<i-x-circle>` |
| ![x-square](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/x-square.svg) | `x-square` | `IconXSquare` | `<i-x-square>` |
| ![x](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/x.svg) | `x` | `IconX` | `<i-x>` |
| ![zap](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/zap.svg) | `zap` | `IconZap` | `<i-zap>` |
| ![zoom-in](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/zoom-in.svg) | `zoom-in` | `IconZoomIn` | `<i-zoom-in>` |
| ![zoom-out](https://cdn.rawgit.com/michaelbazos/angular-feather/ec869e49f7467abdebe6852ba6e9dff0b5dd4163/docs/icons/zoom-out.svg) | `zoom-out` | `IconZoomOut` | `<i-zoom-out>` |

### FAQ

_1. Can I import all icons at once?_

See [issue 1](https://github.com/michaelbazos/angular-feather/issues/1)

### License

MIT © [Michael Bazos](mailto:micabazos@gmail.com)
