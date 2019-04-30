## angular-feather

[![npm](https://img.shields.io/npm/v/angular-feather.svg?style=flat-square)]()
[![license](https://img.shields.io/npm/l/angular-feather.svg?style=flat-square)]()
[![stars](https://img.shields.io/github/stars/michaelbazos/angular-feather.svg?style=flat-square)]()
[![deps status](https://david-dm.org/michaelbazos/angular-feather/status.svg?style=flat-square)](https://david-dm.org/michaelbazos/angular-feather)

### Description

This package allows you to use the [Feather Icons](https://github.com/colebemis/feather) in your angular applications. The icons are designed by Cole Bemis.
Import only the icons that you need.

### Demo
<h4>
  <a href="https://stackblitz.com/edit/angular-feather?file=src%2Fapp%2Fapp.component.html">
    >> See live demo <<
  </a>
</h4>

### Usage

_1. Install the package_

```sh
npm install angular-feather
```

_2. Generate a module to host the icons you'll import_
 
```sh
ng generate module icons
```
  
_3. Import assets_ 

You need to import:
 - FeatherModule, as it contains the `<i-feather>` component
 - The SVGs that you need

We put this in IconsModule for modularity. See example below:


*file: icon.module.ts*
```ts  
import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add FeatherModule to the 'exports', since the <i-feather> component will be used in templates of parent module
// 2. Don't forget to pick some icons using FeatherModule.pick({ ... })
```

_3. Use it in template_

After importing the _IconsModule_ in your feature or shared module, use the icons as follows:

```html
<i-feather name="github" class="someclass"></i-feather>
<i-feather name="heart" style="color: green;"></i-feather>
<i-feather name="camera"></i-feather>
```



### Styling icons


```html
<i-feather name="heart" class="big fill-red"></i-heart>
```

```css
.big {
  height: 50px;
  width: 50px;
}

.fill-red {
  fill: red;
}
```

### Available icons

Refer to the table below for the list of all available icons.

|     | Symbol to import | Icon name          |
| --- | ---------------- | ------------------ |
| ![activity](https://unpkg.com/feather-icons@4.21.0/dist/icons/activity.svg) | `Activity` | `activity` |
| ![airplay](https://unpkg.com/feather-icons@4.21.0/dist/icons/airplay.svg) | `Airplay` | `airplay` |
| ![alert-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/alert-circle.svg) | `AlertCircle` | `alert-circle` |
| ![alert-octagon](https://unpkg.com/feather-icons@4.21.0/dist/icons/alert-octagon.svg) | `AlertOctagon` | `alert-octagon` |
| ![alert-triangle](https://unpkg.com/feather-icons@4.21.0/dist/icons/alert-triangle.svg) | `AlertTriangle` | `alert-triangle` |
| ![align-center](https://unpkg.com/feather-icons@4.21.0/dist/icons/align-center.svg) | `AlignCenter` | `align-center` |
| ![align-justify](https://unpkg.com/feather-icons@4.21.0/dist/icons/align-justify.svg) | `AlignJustify` | `align-justify` |
| ![align-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/align-left.svg) | `AlignLeft` | `align-left` |
| ![align-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/align-right.svg) | `AlignRight` | `align-right` |
| ![anchor](https://unpkg.com/feather-icons@4.21.0/dist/icons/anchor.svg) | `Anchor` | `anchor` |
| ![aperture](https://unpkg.com/feather-icons@4.21.0/dist/icons/aperture.svg) | `Aperture` | `aperture` |
| ![archive](https://unpkg.com/feather-icons@4.21.0/dist/icons/archive.svg) | `Archive` | `archive` |
| ![arrow-down-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-down-circle.svg) | `ArrowDownCircle` | `arrow-down-circle` |
| ![arrow-down-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-down-left.svg) | `ArrowDownLeft` | `arrow-down-left` |
| ![arrow-down-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-down-right.svg) | `ArrowDownRight` | `arrow-down-right` |
| ![arrow-down](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-down.svg) | `ArrowDown` | `arrow-down` |
| ![arrow-left-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-left-circle.svg) | `ArrowLeftCircle` | `arrow-left-circle` |
| ![arrow-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-left.svg) | `ArrowLeft` | `arrow-left` |
| ![arrow-right-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-right-circle.svg) | `ArrowRightCircle` | `arrow-right-circle` |
| ![arrow-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-right.svg) | `ArrowRight` | `arrow-right` |
| ![arrow-up-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-up-circle.svg) | `ArrowUpCircle` | `arrow-up-circle` |
| ![arrow-up-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-up-left.svg) | `ArrowUpLeft` | `arrow-up-left` |
| ![arrow-up-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-up-right.svg) | `ArrowUpRight` | `arrow-up-right` |
| ![arrow-up](https://unpkg.com/feather-icons@4.21.0/dist/icons/arrow-up.svg) | `ArrowUp` | `arrow-up` |
| ![at-sign](https://unpkg.com/feather-icons@4.21.0/dist/icons/at-sign.svg) | `AtSign` | `at-sign` |
| ![award](https://unpkg.com/feather-icons@4.21.0/dist/icons/award.svg) | `Award` | `award` |
| ![bar-chart-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/bar-chart-2.svg) | `BarChart2` | `bar-chart-2` |
| ![bar-chart](https://unpkg.com/feather-icons@4.21.0/dist/icons/bar-chart.svg) | `BarChart` | `bar-chart` |
| ![battery-charging](https://unpkg.com/feather-icons@4.21.0/dist/icons/battery-charging.svg) | `BatteryCharging` | `battery-charging` |
| ![battery](https://unpkg.com/feather-icons@4.21.0/dist/icons/battery.svg) | `Battery` | `battery` |
| ![bell-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/bell-off.svg) | `BellOff` | `bell-off` |
| ![bell](https://unpkg.com/feather-icons@4.21.0/dist/icons/bell.svg) | `Bell` | `bell` |
| ![bluetooth](https://unpkg.com/feather-icons@4.21.0/dist/icons/bluetooth.svg) | `Bluetooth` | `bluetooth` |
| ![bold](https://unpkg.com/feather-icons@4.21.0/dist/icons/bold.svg) | `Bold` | `bold` |
| ![book-open](https://unpkg.com/feather-icons@4.21.0/dist/icons/book-open.svg) | `BookOpen` | `book-open` |
| ![book](https://unpkg.com/feather-icons@4.21.0/dist/icons/book.svg) | `Book` | `book` |
| ![bookmark](https://unpkg.com/feather-icons@4.21.0/dist/icons/bookmark.svg) | `Bookmark` | `bookmark` |
| ![box](https://unpkg.com/feather-icons@4.21.0/dist/icons/box.svg) | `Box` | `box` |
| ![briefcase](https://unpkg.com/feather-icons@4.21.0/dist/icons/briefcase.svg) | `Briefcase` | `briefcase` |
| ![calendar](https://unpkg.com/feather-icons@4.21.0/dist/icons/calendar.svg) | `Calendar` | `calendar` |
| ![camera-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/camera-off.svg) | `CameraOff` | `camera-off` |
| ![camera](https://unpkg.com/feather-icons@4.21.0/dist/icons/camera.svg) | `Camera` | `camera` |
| ![cast](https://unpkg.com/feather-icons@4.21.0/dist/icons/cast.svg) | `Cast` | `cast` |
| ![check-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/check-circle.svg) | `CheckCircle` | `check-circle` |
| ![check-square](https://unpkg.com/feather-icons@4.21.0/dist/icons/check-square.svg) | `CheckSquare` | `check-square` |
| ![check](https://unpkg.com/feather-icons@4.21.0/dist/icons/check.svg) | `Check` | `check` |
| ![chevron-down](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevron-down.svg) | `ChevronDown` | `chevron-down` |
| ![chevron-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevron-left.svg) | `ChevronLeft` | `chevron-left` |
| ![chevron-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevron-right.svg) | `ChevronRight` | `chevron-right` |
| ![chevron-up](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevron-up.svg) | `ChevronUp` | `chevron-up` |
| ![chevrons-down](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevrons-down.svg) | `ChevronsDown` | `chevrons-down` |
| ![chevrons-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevrons-left.svg) | `ChevronsLeft` | `chevrons-left` |
| ![chevrons-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevrons-right.svg) | `ChevronsRight` | `chevrons-right` |
| ![chevrons-up](https://unpkg.com/feather-icons@4.21.0/dist/icons/chevrons-up.svg) | `ChevronsUp` | `chevrons-up` |
| ![chrome](https://unpkg.com/feather-icons@4.21.0/dist/icons/chrome.svg) | `Chrome` | `chrome` |
| ![circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/circle.svg) | `Circle` | `circle` |
| ![clipboard](https://unpkg.com/feather-icons@4.21.0/dist/icons/clipboard.svg) | `Clipboard` | `clipboard` |
| ![clock](https://unpkg.com/feather-icons@4.21.0/dist/icons/clock.svg) | `Clock` | `clock` |
| ![cloud-drizzle](https://unpkg.com/feather-icons@4.21.0/dist/icons/cloud-drizzle.svg) | `CloudDrizzle` | `cloud-drizzle` |
| ![cloud-lightning](https://unpkg.com/feather-icons@4.21.0/dist/icons/cloud-lightning.svg) | `CloudLightning` | `cloud-lightning` |
| ![cloud-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/cloud-off.svg) | `CloudOff` | `cloud-off` |
| ![cloud-rain](https://unpkg.com/feather-icons@4.21.0/dist/icons/cloud-rain.svg) | `CloudRain` | `cloud-rain` |
| ![cloud-snow](https://unpkg.com/feather-icons@4.21.0/dist/icons/cloud-snow.svg) | `CloudSnow` | `cloud-snow` |
| ![cloud](https://unpkg.com/feather-icons@4.21.0/dist/icons/cloud.svg) | `Cloud` | `cloud` |
| ![code](https://unpkg.com/feather-icons@4.21.0/dist/icons/code.svg) | `Code` | `code` |
| ![codepen](https://unpkg.com/feather-icons@4.21.0/dist/icons/codepen.svg) | `Codepen` | `codepen` |
| ![codesandbox](https://unpkg.com/feather-icons@4.21.0/dist/icons/codesandbox.svg) | `Codesandbox` | `codesandbox` |
| ![coffee](https://unpkg.com/feather-icons@4.21.0/dist/icons/coffee.svg) | `Coffee` | `coffee` |
| ![columns](https://unpkg.com/feather-icons@4.21.0/dist/icons/columns.svg) | `Columns` | `columns` |
| ![command](https://unpkg.com/feather-icons@4.21.0/dist/icons/command.svg) | `Command` | `command` |
| ![compass](https://unpkg.com/feather-icons@4.21.0/dist/icons/compass.svg) | `Compass` | `compass` |
| ![copy](https://unpkg.com/feather-icons@4.21.0/dist/icons/copy.svg) | `Copy` | `copy` |
| ![corner-down-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-down-left.svg) | `CornerDownLeft` | `corner-down-left` |
| ![corner-down-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-down-right.svg) | `CornerDownRight` | `corner-down-right` |
| ![corner-left-down](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-left-down.svg) | `CornerLeftDown` | `corner-left-down` |
| ![corner-left-up](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-left-up.svg) | `CornerLeftUp` | `corner-left-up` |
| ![corner-right-down](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-right-down.svg) | `CornerRightDown` | `corner-right-down` |
| ![corner-right-up](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-right-up.svg) | `CornerRightUp` | `corner-right-up` |
| ![corner-up-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-up-left.svg) | `CornerUpLeft` | `corner-up-left` |
| ![corner-up-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/corner-up-right.svg) | `CornerUpRight` | `corner-up-right` |
| ![cpu](https://unpkg.com/feather-icons@4.21.0/dist/icons/cpu.svg) | `Cpu` | `cpu` |
| ![credit-card](https://unpkg.com/feather-icons@4.21.0/dist/icons/credit-card.svg) | `CreditCard` | `credit-card` |
| ![crop](https://unpkg.com/feather-icons@4.21.0/dist/icons/crop.svg) | `Crop` | `crop` |
| ![crosshair](https://unpkg.com/feather-icons@4.21.0/dist/icons/crosshair.svg) | `Crosshair` | `crosshair` |
| ![database](https://unpkg.com/feather-icons@4.21.0/dist/icons/database.svg) | `Database` | `database` |
| ![delete](https://unpkg.com/feather-icons@4.21.0/dist/icons/delete.svg) | `Delete` | `delete` |
| ![disc](https://unpkg.com/feather-icons@4.21.0/dist/icons/disc.svg) | `Disc` | `disc` |
| ![dollar-sign](https://unpkg.com/feather-icons@4.21.0/dist/icons/dollar-sign.svg) | `DollarSign` | `dollar-sign` |
| ![download-cloud](https://unpkg.com/feather-icons@4.21.0/dist/icons/download-cloud.svg) | `DownloadCloud` | `download-cloud` |
| ![download](https://unpkg.com/feather-icons@4.21.0/dist/icons/download.svg) | `Download` | `download` |
| ![droplet](https://unpkg.com/feather-icons@4.21.0/dist/icons/droplet.svg) | `Droplet` | `droplet` |
| ![edit-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/edit-2.svg) | `Edit2` | `edit-2` |
| ![edit-3](https://unpkg.com/feather-icons@4.21.0/dist/icons/edit-3.svg) | `Edit3` | `edit-3` |
| ![edit](https://unpkg.com/feather-icons@4.21.0/dist/icons/edit.svg) | `Edit` | `edit` |
| ![external-link](https://unpkg.com/feather-icons@4.21.0/dist/icons/external-link.svg) | `ExternalLink` | `external-link` |
| ![eye-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/eye-off.svg) | `EyeOff` | `eye-off` |
| ![eye](https://unpkg.com/feather-icons@4.21.0/dist/icons/eye.svg) | `Eye` | `eye` |
| ![facebook](https://unpkg.com/feather-icons@4.21.0/dist/icons/facebook.svg) | `Facebook` | `facebook` |
| ![fast-forward](https://unpkg.com/feather-icons@4.21.0/dist/icons/fast-forward.svg) | `FastForward` | `fast-forward` |
| ![feather](https://unpkg.com/feather-icons@4.21.0/dist/icons/feather.svg) | `Feather` | `feather` |
| ![figma](https://unpkg.com/feather-icons@4.21.0/dist/icons/figma.svg) | `Figma` | `figma` |
| ![file-minus](https://unpkg.com/feather-icons@4.21.0/dist/icons/file-minus.svg) | `FileMinus` | `file-minus` |
| ![file-plus](https://unpkg.com/feather-icons@4.21.0/dist/icons/file-plus.svg) | `FilePlus` | `file-plus` |
| ![file-text](https://unpkg.com/feather-icons@4.21.0/dist/icons/file-text.svg) | `FileText` | `file-text` |
| ![file](https://unpkg.com/feather-icons@4.21.0/dist/icons/file.svg) | `File` | `file` |
| ![film](https://unpkg.com/feather-icons@4.21.0/dist/icons/film.svg) | `Film` | `film` |
| ![filter](https://unpkg.com/feather-icons@4.21.0/dist/icons/filter.svg) | `Filter` | `filter` |
| ![flag](https://unpkg.com/feather-icons@4.21.0/dist/icons/flag.svg) | `Flag` | `flag` |
| ![folder-minus](https://unpkg.com/feather-icons@4.21.0/dist/icons/folder-minus.svg) | `FolderMinus` | `folder-minus` |
| ![folder-plus](https://unpkg.com/feather-icons@4.21.0/dist/icons/folder-plus.svg) | `FolderPlus` | `folder-plus` |
| ![folder](https://unpkg.com/feather-icons@4.21.0/dist/icons/folder.svg) | `Folder` | `folder` |
| ![frown](https://unpkg.com/feather-icons@4.21.0/dist/icons/frown.svg) | `Frown` | `frown` |
| ![gift](https://unpkg.com/feather-icons@4.21.0/dist/icons/gift.svg) | `Gift` | `gift` |
| ![git-branch](https://unpkg.com/feather-icons@4.21.0/dist/icons/git-branch.svg) | `GitBranch` | `git-branch` |
| ![git-commit](https://unpkg.com/feather-icons@4.21.0/dist/icons/git-commit.svg) | `GitCommit` | `git-commit` |
| ![git-merge](https://unpkg.com/feather-icons@4.21.0/dist/icons/git-merge.svg) | `GitMerge` | `git-merge` |
| ![git-pull-request](https://unpkg.com/feather-icons@4.21.0/dist/icons/git-pull-request.svg) | `GitPullRequest` | `git-pull-request` |
| ![github](https://unpkg.com/feather-icons@4.21.0/dist/icons/github.svg) | `Github` | `github` |
| ![gitlab](https://unpkg.com/feather-icons@4.21.0/dist/icons/gitlab.svg) | `Gitlab` | `gitlab` |
| ![globe](https://unpkg.com/feather-icons@4.21.0/dist/icons/globe.svg) | `Globe` | `globe` |
| ![grid](https://unpkg.com/feather-icons@4.21.0/dist/icons/grid.svg) | `Grid` | `grid` |
| ![hard-drive](https://unpkg.com/feather-icons@4.21.0/dist/icons/hard-drive.svg) | `HardDrive` | `hard-drive` |
| ![hash](https://unpkg.com/feather-icons@4.21.0/dist/icons/hash.svg) | `Hash` | `hash` |
| ![headphones](https://unpkg.com/feather-icons@4.21.0/dist/icons/headphones.svg) | `Headphones` | `headphones` |
| ![heart](https://unpkg.com/feather-icons@4.21.0/dist/icons/heart.svg) | `Heart` | `heart` |
| ![help-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/help-circle.svg) | `HelpCircle` | `help-circle` |
| ![hexagon](https://unpkg.com/feather-icons@4.21.0/dist/icons/hexagon.svg) | `Hexagon` | `hexagon` |
| ![home](https://unpkg.com/feather-icons@4.21.0/dist/icons/home.svg) | `Home` | `home` |
| ![image](https://unpkg.com/feather-icons@4.21.0/dist/icons/image.svg) | `Image` | `image` |
| ![inbox](https://unpkg.com/feather-icons@4.21.0/dist/icons/inbox.svg) | `Inbox` | `inbox` |
| ![info](https://unpkg.com/feather-icons@4.21.0/dist/icons/info.svg) | `Info` | `info` |
| ![instagram](https://unpkg.com/feather-icons@4.21.0/dist/icons/instagram.svg) | `Instagram` | `instagram` |
| ![italic](https://unpkg.com/feather-icons@4.21.0/dist/icons/italic.svg) | `Italic` | `italic` |
| ![key](https://unpkg.com/feather-icons@4.21.0/dist/icons/key.svg) | `Key` | `key` |
| ![layers](https://unpkg.com/feather-icons@4.21.0/dist/icons/layers.svg) | `Layers` | `layers` |
| ![layout](https://unpkg.com/feather-icons@4.21.0/dist/icons/layout.svg) | `Layout` | `layout` |
| ![life-buoy](https://unpkg.com/feather-icons@4.21.0/dist/icons/life-buoy.svg) | `LifeBuoy` | `life-buoy` |
| ![link-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/link-2.svg) | `Link2` | `link-2` |
| ![link](https://unpkg.com/feather-icons@4.21.0/dist/icons/link.svg) | `Link` | `link` |
| ![linkedin](https://unpkg.com/feather-icons@4.21.0/dist/icons/linkedin.svg) | `Linkedin` | `linkedin` |
| ![list](https://unpkg.com/feather-icons@4.21.0/dist/icons/list.svg) | `List` | `list` |
| ![loader](https://unpkg.com/feather-icons@4.21.0/dist/icons/loader.svg) | `Loader` | `loader` |
| ![lock](https://unpkg.com/feather-icons@4.21.0/dist/icons/lock.svg) | `Lock` | `lock` |
| ![log-in](https://unpkg.com/feather-icons@4.21.0/dist/icons/log-in.svg) | `LogIn` | `log-in` |
| ![log-out](https://unpkg.com/feather-icons@4.21.0/dist/icons/log-out.svg) | `LogOut` | `log-out` |
| ![mail](https://unpkg.com/feather-icons@4.21.0/dist/icons/mail.svg) | `Mail` | `mail` |
| ![map-pin](https://unpkg.com/feather-icons@4.21.0/dist/icons/map-pin.svg) | `MapPin` | `map-pin` |
| ![map](https://unpkg.com/feather-icons@4.21.0/dist/icons/map.svg) | `Map` | `map` |
| ![maximize-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/maximize-2.svg) | `Maximize2` | `maximize-2` |
| ![maximize](https://unpkg.com/feather-icons@4.21.0/dist/icons/maximize.svg) | `Maximize` | `maximize` |
| ![meh](https://unpkg.com/feather-icons@4.21.0/dist/icons/meh.svg) | `Meh` | `meh` |
| ![menu](https://unpkg.com/feather-icons@4.21.0/dist/icons/menu.svg) | `Menu` | `menu` |
| ![message-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/message-circle.svg) | `MessageCircle` | `message-circle` |
| ![message-square](https://unpkg.com/feather-icons@4.21.0/dist/icons/message-square.svg) | `MessageSquare` | `message-square` |
| ![mic-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/mic-off.svg) | `MicOff` | `mic-off` |
| ![mic](https://unpkg.com/feather-icons@4.21.0/dist/icons/mic.svg) | `Mic` | `mic` |
| ![minimize-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/minimize-2.svg) | `Minimize2` | `minimize-2` |
| ![minimize](https://unpkg.com/feather-icons@4.21.0/dist/icons/minimize.svg) | `Minimize` | `minimize` |
| ![minus-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/minus-circle.svg) | `MinusCircle` | `minus-circle` |
| ![minus-square](https://unpkg.com/feather-icons@4.21.0/dist/icons/minus-square.svg) | `MinusSquare` | `minus-square` |
| ![minus](https://unpkg.com/feather-icons@4.21.0/dist/icons/minus.svg) | `Minus` | `minus` |
| ![monitor](https://unpkg.com/feather-icons@4.21.0/dist/icons/monitor.svg) | `Monitor` | `monitor` |
| ![moon](https://unpkg.com/feather-icons@4.21.0/dist/icons/moon.svg) | `Moon` | `moon` |
| ![more-horizontal](https://unpkg.com/feather-icons@4.21.0/dist/icons/more-horizontal.svg) | `MoreHorizontal` | `more-horizontal` |
| ![more-vertical](https://unpkg.com/feather-icons@4.21.0/dist/icons/more-vertical.svg) | `MoreVertical` | `more-vertical` |
| ![mouse-pointer](https://unpkg.com/feather-icons@4.21.0/dist/icons/mouse-pointer.svg) | `MousePointer` | `mouse-pointer` |
| ![move](https://unpkg.com/feather-icons@4.21.0/dist/icons/move.svg) | `Move` | `move` |
| ![music](https://unpkg.com/feather-icons@4.21.0/dist/icons/music.svg) | `Music` | `music` |
| ![navigation-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/navigation-2.svg) | `Navigation2` | `navigation-2` |
| ![navigation](https://unpkg.com/feather-icons@4.21.0/dist/icons/navigation.svg) | `Navigation` | `navigation` |
| ![octagon](https://unpkg.com/feather-icons@4.21.0/dist/icons/octagon.svg) | `Octagon` | `octagon` |
| ![package](https://unpkg.com/feather-icons@4.21.0/dist/icons/package.svg) | `Package` | `package` |
| ![paperclip](https://unpkg.com/feather-icons@4.21.0/dist/icons/paperclip.svg) | `Paperclip` | `paperclip` |
| ![pause-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/pause-circle.svg) | `PauseCircle` | `pause-circle` |
| ![pause](https://unpkg.com/feather-icons@4.21.0/dist/icons/pause.svg) | `Pause` | `pause` |
| ![pen-tool](https://unpkg.com/feather-icons@4.21.0/dist/icons/pen-tool.svg) | `PenTool` | `pen-tool` |
| ![percent](https://unpkg.com/feather-icons@4.21.0/dist/icons/percent.svg) | `Percent` | `percent` |
| ![phone-call](https://unpkg.com/feather-icons@4.21.0/dist/icons/phone-call.svg) | `PhoneCall` | `phone-call` |
| ![phone-forwarded](https://unpkg.com/feather-icons@4.21.0/dist/icons/phone-forwarded.svg) | `PhoneForwarded` | `phone-forwarded` |
| ![phone-incoming](https://unpkg.com/feather-icons@4.21.0/dist/icons/phone-incoming.svg) | `PhoneIncoming` | `phone-incoming` |
| ![phone-missed](https://unpkg.com/feather-icons@4.21.0/dist/icons/phone-missed.svg) | `PhoneMissed` | `phone-missed` |
| ![phone-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/phone-off.svg) | `PhoneOff` | `phone-off` |
| ![phone-outgoing](https://unpkg.com/feather-icons@4.21.0/dist/icons/phone-outgoing.svg) | `PhoneOutgoing` | `phone-outgoing` |
| ![phone](https://unpkg.com/feather-icons@4.21.0/dist/icons/phone.svg) | `Phone` | `phone` |
| ![pie-chart](https://unpkg.com/feather-icons@4.21.0/dist/icons/pie-chart.svg) | `PieChart` | `pie-chart` |
| ![play-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/play-circle.svg) | `PlayCircle` | `play-circle` |
| ![play](https://unpkg.com/feather-icons@4.21.0/dist/icons/play.svg) | `Play` | `play` |
| ![plus-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/plus-circle.svg) | `PlusCircle` | `plus-circle` |
| ![plus-square](https://unpkg.com/feather-icons@4.21.0/dist/icons/plus-square.svg) | `PlusSquare` | `plus-square` |
| ![plus](https://unpkg.com/feather-icons@4.21.0/dist/icons/plus.svg) | `Plus` | `plus` |
| ![pocket](https://unpkg.com/feather-icons@4.21.0/dist/icons/pocket.svg) | `Pocket` | `pocket` |
| ![power](https://unpkg.com/feather-icons@4.21.0/dist/icons/power.svg) | `Power` | `power` |
| ![printer](https://unpkg.com/feather-icons@4.21.0/dist/icons/printer.svg) | `Printer` | `printer` |
| ![radio](https://unpkg.com/feather-icons@4.21.0/dist/icons/radio.svg) | `Radio` | `radio` |
| ![refresh-ccw](https://unpkg.com/feather-icons@4.21.0/dist/icons/refresh-ccw.svg) | `RefreshCcw` | `refresh-ccw` |
| ![refresh-cw](https://unpkg.com/feather-icons@4.21.0/dist/icons/refresh-cw.svg) | `RefreshCw` | `refresh-cw` |
| ![repeat](https://unpkg.com/feather-icons@4.21.0/dist/icons/repeat.svg) | `Repeat` | `repeat` |
| ![rewind](https://unpkg.com/feather-icons@4.21.0/dist/icons/rewind.svg) | `Rewind` | `rewind` |
| ![rotate-ccw](https://unpkg.com/feather-icons@4.21.0/dist/icons/rotate-ccw.svg) | `RotateCcw` | `rotate-ccw` |
| ![rotate-cw](https://unpkg.com/feather-icons@4.21.0/dist/icons/rotate-cw.svg) | `RotateCw` | `rotate-cw` |
| ![rss](https://unpkg.com/feather-icons@4.21.0/dist/icons/rss.svg) | `Rss` | `rss` |
| ![save](https://unpkg.com/feather-icons@4.21.0/dist/icons/save.svg) | `Save` | `save` |
| ![scissors](https://unpkg.com/feather-icons@4.21.0/dist/icons/scissors.svg) | `Scissors` | `scissors` |
| ![search](https://unpkg.com/feather-icons@4.21.0/dist/icons/search.svg) | `Search` | `search` |
| ![send](https://unpkg.com/feather-icons@4.21.0/dist/icons/send.svg) | `Send` | `send` |
| ![server](https://unpkg.com/feather-icons@4.21.0/dist/icons/server.svg) | `Server` | `server` |
| ![settings](https://unpkg.com/feather-icons@4.21.0/dist/icons/settings.svg) | `Settings` | `settings` |
| ![share-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/share-2.svg) | `Share2` | `share-2` |
| ![share](https://unpkg.com/feather-icons@4.21.0/dist/icons/share.svg) | `Share` | `share` |
| ![shield-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/shield-off.svg) | `ShieldOff` | `shield-off` |
| ![shield](https://unpkg.com/feather-icons@4.21.0/dist/icons/shield.svg) | `Shield` | `shield` |
| ![shopping-bag](https://unpkg.com/feather-icons@4.21.0/dist/icons/shopping-bag.svg) | `ShoppingBag` | `shopping-bag` |
| ![shopping-cart](https://unpkg.com/feather-icons@4.21.0/dist/icons/shopping-cart.svg) | `ShoppingCart` | `shopping-cart` |
| ![shuffle](https://unpkg.com/feather-icons@4.21.0/dist/icons/shuffle.svg) | `Shuffle` | `shuffle` |
| ![sidebar](https://unpkg.com/feather-icons@4.21.0/dist/icons/sidebar.svg) | `Sidebar` | `sidebar` |
| ![skip-back](https://unpkg.com/feather-icons@4.21.0/dist/icons/skip-back.svg) | `SkipBack` | `skip-back` |
| ![skip-forward](https://unpkg.com/feather-icons@4.21.0/dist/icons/skip-forward.svg) | `SkipForward` | `skip-forward` |
| ![slack](https://unpkg.com/feather-icons@4.21.0/dist/icons/slack.svg) | `Slack` | `slack` |
| ![slash](https://unpkg.com/feather-icons@4.21.0/dist/icons/slash.svg) | `Slash` | `slash` |
| ![sliders](https://unpkg.com/feather-icons@4.21.0/dist/icons/sliders.svg) | `Sliders` | `sliders` |
| ![smartphone](https://unpkg.com/feather-icons@4.21.0/dist/icons/smartphone.svg) | `Smartphone` | `smartphone` |
| ![smile](https://unpkg.com/feather-icons@4.21.0/dist/icons/smile.svg) | `Smile` | `smile` |
| ![speaker](https://unpkg.com/feather-icons@4.21.0/dist/icons/speaker.svg) | `Speaker` | `speaker` |
| ![square](https://unpkg.com/feather-icons@4.21.0/dist/icons/square.svg) | `Square` | `square` |
| ![star](https://unpkg.com/feather-icons@4.21.0/dist/icons/star.svg) | `Star` | `star` |
| ![stop-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/stop-circle.svg) | `StopCircle` | `stop-circle` |
| ![sun](https://unpkg.com/feather-icons@4.21.0/dist/icons/sun.svg) | `Sun` | `sun` |
| ![sunrise](https://unpkg.com/feather-icons@4.21.0/dist/icons/sunrise.svg) | `Sunrise` | `sunrise` |
| ![sunset](https://unpkg.com/feather-icons@4.21.0/dist/icons/sunset.svg) | `Sunset` | `sunset` |
| ![tablet](https://unpkg.com/feather-icons@4.21.0/dist/icons/tablet.svg) | `Tablet` | `tablet` |
| ![tag](https://unpkg.com/feather-icons@4.21.0/dist/icons/tag.svg) | `Tag` | `tag` |
| ![target](https://unpkg.com/feather-icons@4.21.0/dist/icons/target.svg) | `Target` | `target` |
| ![terminal](https://unpkg.com/feather-icons@4.21.0/dist/icons/terminal.svg) | `Terminal` | `terminal` |
| ![thermometer](https://unpkg.com/feather-icons@4.21.0/dist/icons/thermometer.svg) | `Thermometer` | `thermometer` |
| ![thumbs-down](https://unpkg.com/feather-icons@4.21.0/dist/icons/thumbs-down.svg) | `ThumbsDown` | `thumbs-down` |
| ![thumbs-up](https://unpkg.com/feather-icons@4.21.0/dist/icons/thumbs-up.svg) | `ThumbsUp` | `thumbs-up` |
| ![toggle-left](https://unpkg.com/feather-icons@4.21.0/dist/icons/toggle-left.svg) | `ToggleLeft` | `toggle-left` |
| ![toggle-right](https://unpkg.com/feather-icons@4.21.0/dist/icons/toggle-right.svg) | `ToggleRight` | `toggle-right` |
| ![trash-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/trash-2.svg) | `Trash2` | `trash-2` |
| ![trash](https://unpkg.com/feather-icons@4.21.0/dist/icons/trash.svg) | `Trash` | `trash` |
| ![trello](https://unpkg.com/feather-icons@4.21.0/dist/icons/trello.svg) | `Trello` | `trello` |
| ![trending-down](https://unpkg.com/feather-icons@4.21.0/dist/icons/trending-down.svg) | `TrendingDown` | `trending-down` |
| ![trending-up](https://unpkg.com/feather-icons@4.21.0/dist/icons/trending-up.svg) | `TrendingUp` | `trending-up` |
| ![triangle](https://unpkg.com/feather-icons@4.21.0/dist/icons/triangle.svg) | `Triangle` | `triangle` |
| ![truck](https://unpkg.com/feather-icons@4.21.0/dist/icons/truck.svg) | `Truck` | `truck` |
| ![tv](https://unpkg.com/feather-icons@4.21.0/dist/icons/tv.svg) | `Tv` | `tv` |
| ![twitter](https://unpkg.com/feather-icons@4.21.0/dist/icons/twitter.svg) | `Twitter` | `twitter` |
| ![type](https://unpkg.com/feather-icons@4.21.0/dist/icons/type.svg) | `Type` | `type` |
| ![umbrella](https://unpkg.com/feather-icons@4.21.0/dist/icons/umbrella.svg) | `Umbrella` | `umbrella` |
| ![underline](https://unpkg.com/feather-icons@4.21.0/dist/icons/underline.svg) | `Underline` | `underline` |
| ![unlock](https://unpkg.com/feather-icons@4.21.0/dist/icons/unlock.svg) | `Unlock` | `unlock` |
| ![upload-cloud](https://unpkg.com/feather-icons@4.21.0/dist/icons/upload-cloud.svg) | `UploadCloud` | `upload-cloud` |
| ![upload](https://unpkg.com/feather-icons@4.21.0/dist/icons/upload.svg) | `Upload` | `upload` |
| ![user-check](https://unpkg.com/feather-icons@4.21.0/dist/icons/user-check.svg) | `UserCheck` | `user-check` |
| ![user-minus](https://unpkg.com/feather-icons@4.21.0/dist/icons/user-minus.svg) | `UserMinus` | `user-minus` |
| ![user-plus](https://unpkg.com/feather-icons@4.21.0/dist/icons/user-plus.svg) | `UserPlus` | `user-plus` |
| ![user-x](https://unpkg.com/feather-icons@4.21.0/dist/icons/user-x.svg) | `UserX` | `user-x` |
| ![user](https://unpkg.com/feather-icons@4.21.0/dist/icons/user.svg) | `User` | `user` |
| ![users](https://unpkg.com/feather-icons@4.21.0/dist/icons/users.svg) | `Users` | `users` |
| ![video-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/video-off.svg) | `VideoOff` | `video-off` |
| ![video](https://unpkg.com/feather-icons@4.21.0/dist/icons/video.svg) | `Video` | `video` |
| ![voicemail](https://unpkg.com/feather-icons@4.21.0/dist/icons/voicemail.svg) | `Voicemail` | `voicemail` |
| ![volume-1](https://unpkg.com/feather-icons@4.21.0/dist/icons/volume-1.svg) | `Volume1` | `volume-1` |
| ![volume-2](https://unpkg.com/feather-icons@4.21.0/dist/icons/volume-2.svg) | `Volume2` | `volume-2` |
| ![volume-x](https://unpkg.com/feather-icons@4.21.0/dist/icons/volume-x.svg) | `VolumeX` | `volume-x` |
| ![volume](https://unpkg.com/feather-icons@4.21.0/dist/icons/volume.svg) | `Volume` | `volume` |
| ![watch](https://unpkg.com/feather-icons@4.21.0/dist/icons/watch.svg) | `Watch` | `watch` |
| ![wifi-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/wifi-off.svg) | `WifiOff` | `wifi-off` |
| ![wifi](https://unpkg.com/feather-icons@4.21.0/dist/icons/wifi.svg) | `Wifi` | `wifi` |
| ![wind](https://unpkg.com/feather-icons@4.21.0/dist/icons/wind.svg) | `Wind` | `wind` |
| ![x-circle](https://unpkg.com/feather-icons@4.21.0/dist/icons/x-circle.svg) | `XCircle` | `x-circle` |
| ![x-octagon](https://unpkg.com/feather-icons@4.21.0/dist/icons/x-octagon.svg) | `XOctagon` | `x-octagon` |
| ![x-square](https://unpkg.com/feather-icons@4.21.0/dist/icons/x-square.svg) | `XSquare` | `x-square` |
| ![x](https://unpkg.com/feather-icons@4.21.0/dist/icons/x.svg) | `X` | `x` |
| ![youtube](https://unpkg.com/feather-icons@4.21.0/dist/icons/youtube.svg) | `Youtube` | `youtube` |
| ![zap-off](https://unpkg.com/feather-icons@4.21.0/dist/icons/zap-off.svg) | `ZapOff` | `zap-off` |
| ![zap](https://unpkg.com/feather-icons@4.21.0/dist/icons/zap.svg) | `Zap` | `zap` |
| ![zoom-in](https://unpkg.com/feather-icons@4.21.0/dist/icons/zoom-in.svg) | `ZoomIn` | `zoom-in` |
| ![zoom-out](https://unpkg.com/feather-icons@4.21.0/dist/icons/zoom-out.svg) | `ZoomOut` | `zoom-out` |


### FAQ


### License

MIT © [Michael Bazos](mailto:micabazos@gmail.com)
