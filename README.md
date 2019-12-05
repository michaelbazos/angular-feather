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
  </a>  (right-click, open in new tab)
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

|     | Symbol to import | HTML template      |
| --- | ---------------- | ------------------ |
| ![activity](https://unpkg.com/feather-icons@4.24.1/dist/icons/activity.svg) | `Activity` | `<i-feather name="activity"></i-feather>` |
| ![airplay](https://unpkg.com/feather-icons@4.24.1/dist/icons/airplay.svg) | `Airplay` | `<i-feather name="airplay"></i-feather>` |
| ![alert-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/alert-circle.svg) | `AlertCircle` | `<i-feather name="alert-circle"></i-feather>` |
| ![alert-octagon](https://unpkg.com/feather-icons@4.24.1/dist/icons/alert-octagon.svg) | `AlertOctagon` | `<i-feather name="alert-octagon"></i-feather>` |
| ![alert-triangle](https://unpkg.com/feather-icons@4.24.1/dist/icons/alert-triangle.svg) | `AlertTriangle` | `<i-feather name="alert-triangle"></i-feather>` |
| ![align-center](https://unpkg.com/feather-icons@4.24.1/dist/icons/align-center.svg) | `AlignCenter` | `<i-feather name="align-center"></i-feather>` |
| ![align-justify](https://unpkg.com/feather-icons@4.24.1/dist/icons/align-justify.svg) | `AlignJustify` | `<i-feather name="align-justify"></i-feather>` |
| ![align-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/align-left.svg) | `AlignLeft` | `<i-feather name="align-left"></i-feather>` |
| ![align-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/align-right.svg) | `AlignRight` | `<i-feather name="align-right"></i-feather>` |
| ![anchor](https://unpkg.com/feather-icons@4.24.1/dist/icons/anchor.svg) | `Anchor` | `<i-feather name="anchor"></i-feather>` |
| ![aperture](https://unpkg.com/feather-icons@4.24.1/dist/icons/aperture.svg) | `Aperture` | `<i-feather name="aperture"></i-feather>` |
| ![archive](https://unpkg.com/feather-icons@4.24.1/dist/icons/archive.svg) | `Archive` | `<i-feather name="archive"></i-feather>` |
| ![arrow-down-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-down-circle.svg) | `ArrowDownCircle` | `<i-feather name="arrow-down-circle"></i-feather>` |
| ![arrow-down-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-down-left.svg) | `ArrowDownLeft` | `<i-feather name="arrow-down-left"></i-feather>` |
| ![arrow-down-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-down-right.svg) | `ArrowDownRight` | `<i-feather name="arrow-down-right"></i-feather>` |
| ![arrow-down](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-down.svg) | `ArrowDown` | `<i-feather name="arrow-down"></i-feather>` |
| ![arrow-left-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-left-circle.svg) | `ArrowLeftCircle` | `<i-feather name="arrow-left-circle"></i-feather>` |
| ![arrow-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-left.svg) | `ArrowLeft` | `<i-feather name="arrow-left"></i-feather>` |
| ![arrow-right-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-right-circle.svg) | `ArrowRightCircle` | `<i-feather name="arrow-right-circle"></i-feather>` |
| ![arrow-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-right.svg) | `ArrowRight` | `<i-feather name="arrow-right"></i-feather>` |
| ![arrow-up-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-up-circle.svg) | `ArrowUpCircle` | `<i-feather name="arrow-up-circle"></i-feather>` |
| ![arrow-up-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-up-left.svg) | `ArrowUpLeft` | `<i-feather name="arrow-up-left"></i-feather>` |
| ![arrow-up-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-up-right.svg) | `ArrowUpRight` | `<i-feather name="arrow-up-right"></i-feather>` |
| ![arrow-up](https://unpkg.com/feather-icons@4.24.1/dist/icons/arrow-up.svg) | `ArrowUp` | `<i-feather name="arrow-up"></i-feather>` |
| ![at-sign](https://unpkg.com/feather-icons@4.24.1/dist/icons/at-sign.svg) | `AtSign` | `<i-feather name="at-sign"></i-feather>` |
| ![award](https://unpkg.com/feather-icons@4.24.1/dist/icons/award.svg) | `Award` | `<i-feather name="award"></i-feather>` |
| ![bar-chart-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/bar-chart-2.svg) | `BarChart2` | `<i-feather name="bar-chart-2"></i-feather>` |
| ![bar-chart](https://unpkg.com/feather-icons@4.24.1/dist/icons/bar-chart.svg) | `BarChart` | `<i-feather name="bar-chart"></i-feather>` |
| ![battery-charging](https://unpkg.com/feather-icons@4.24.1/dist/icons/battery-charging.svg) | `BatteryCharging` | `<i-feather name="battery-charging"></i-feather>` |
| ![battery](https://unpkg.com/feather-icons@4.24.1/dist/icons/battery.svg) | `Battery` | `<i-feather name="battery"></i-feather>` |
| ![bell-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/bell-off.svg) | `BellOff` | `<i-feather name="bell-off"></i-feather>` |
| ![bell](https://unpkg.com/feather-icons@4.24.1/dist/icons/bell.svg) | `Bell` | `<i-feather name="bell"></i-feather>` |
| ![bluetooth](https://unpkg.com/feather-icons@4.24.1/dist/icons/bluetooth.svg) | `Bluetooth` | `<i-feather name="bluetooth"></i-feather>` |
| ![bold](https://unpkg.com/feather-icons@4.24.1/dist/icons/bold.svg) | `Bold` | `<i-feather name="bold"></i-feather>` |
| ![book-open](https://unpkg.com/feather-icons@4.24.1/dist/icons/book-open.svg) | `BookOpen` | `<i-feather name="book-open"></i-feather>` |
| ![book](https://unpkg.com/feather-icons@4.24.1/dist/icons/book.svg) | `Book` | `<i-feather name="book"></i-feather>` |
| ![bookmark](https://unpkg.com/feather-icons@4.24.1/dist/icons/bookmark.svg) | `Bookmark` | `<i-feather name="bookmark"></i-feather>` |
| ![box](https://unpkg.com/feather-icons@4.24.1/dist/icons/box.svg) | `Box` | `<i-feather name="box"></i-feather>` |
| ![briefcase](https://unpkg.com/feather-icons@4.24.1/dist/icons/briefcase.svg) | `Briefcase` | `<i-feather name="briefcase"></i-feather>` |
| ![calendar](https://unpkg.com/feather-icons@4.24.1/dist/icons/calendar.svg) | `Calendar` | `<i-feather name="calendar"></i-feather>` |
| ![camera-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/camera-off.svg) | `CameraOff` | `<i-feather name="camera-off"></i-feather>` |
| ![camera](https://unpkg.com/feather-icons@4.24.1/dist/icons/camera.svg) | `Camera` | `<i-feather name="camera"></i-feather>` |
| ![cast](https://unpkg.com/feather-icons@4.24.1/dist/icons/cast.svg) | `Cast` | `<i-feather name="cast"></i-feather>` |
| ![check-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/check-circle.svg) | `CheckCircle` | `<i-feather name="check-circle"></i-feather>` |
| ![check-square](https://unpkg.com/feather-icons@4.24.1/dist/icons/check-square.svg) | `CheckSquare` | `<i-feather name="check-square"></i-feather>` |
| ![check](https://unpkg.com/feather-icons@4.24.1/dist/icons/check.svg) | `Check` | `<i-feather name="check"></i-feather>` |
| ![chevron-down](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevron-down.svg) | `ChevronDown` | `<i-feather name="chevron-down"></i-feather>` |
| ![chevron-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevron-left.svg) | `ChevronLeft` | `<i-feather name="chevron-left"></i-feather>` |
| ![chevron-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevron-right.svg) | `ChevronRight` | `<i-feather name="chevron-right"></i-feather>` |
| ![chevron-up](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevron-up.svg) | `ChevronUp` | `<i-feather name="chevron-up"></i-feather>` |
| ![chevrons-down](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevrons-down.svg) | `ChevronsDown` | `<i-feather name="chevrons-down"></i-feather>` |
| ![chevrons-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevrons-left.svg) | `ChevronsLeft` | `<i-feather name="chevrons-left"></i-feather>` |
| ![chevrons-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevrons-right.svg) | `ChevronsRight` | `<i-feather name="chevrons-right"></i-feather>` |
| ![chevrons-up](https://unpkg.com/feather-icons@4.24.1/dist/icons/chevrons-up.svg) | `ChevronsUp` | `<i-feather name="chevrons-up"></i-feather>` |
| ![chrome](https://unpkg.com/feather-icons@4.24.1/dist/icons/chrome.svg) | `Chrome` | `<i-feather name="chrome"></i-feather>` |
| ![circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/circle.svg) | `Circle` | `<i-feather name="circle"></i-feather>` |
| ![clipboard](https://unpkg.com/feather-icons@4.24.1/dist/icons/clipboard.svg) | `Clipboard` | `<i-feather name="clipboard"></i-feather>` |
| ![clock](https://unpkg.com/feather-icons@4.24.1/dist/icons/clock.svg) | `Clock` | `<i-feather name="clock"></i-feather>` |
| ![cloud-drizzle](https://unpkg.com/feather-icons@4.24.1/dist/icons/cloud-drizzle.svg) | `CloudDrizzle` | `<i-feather name="cloud-drizzle"></i-feather>` |
| ![cloud-lightning](https://unpkg.com/feather-icons@4.24.1/dist/icons/cloud-lightning.svg) | `CloudLightning` | `<i-feather name="cloud-lightning"></i-feather>` |
| ![cloud-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/cloud-off.svg) | `CloudOff` | `<i-feather name="cloud-off"></i-feather>` |
| ![cloud-rain](https://unpkg.com/feather-icons@4.24.1/dist/icons/cloud-rain.svg) | `CloudRain` | `<i-feather name="cloud-rain"></i-feather>` |
| ![cloud-snow](https://unpkg.com/feather-icons@4.24.1/dist/icons/cloud-snow.svg) | `CloudSnow` | `<i-feather name="cloud-snow"></i-feather>` |
| ![cloud](https://unpkg.com/feather-icons@4.24.1/dist/icons/cloud.svg) | `Cloud` | `<i-feather name="cloud"></i-feather>` |
| ![code](https://unpkg.com/feather-icons@4.24.1/dist/icons/code.svg) | `Code` | `<i-feather name="code"></i-feather>` |
| ![codepen](https://unpkg.com/feather-icons@4.24.1/dist/icons/codepen.svg) | `Codepen` | `<i-feather name="codepen"></i-feather>` |
| ![codesandbox](https://unpkg.com/feather-icons@4.24.1/dist/icons/codesandbox.svg) | `Codesandbox` | `<i-feather name="codesandbox"></i-feather>` |
| ![coffee](https://unpkg.com/feather-icons@4.24.1/dist/icons/coffee.svg) | `Coffee` | `<i-feather name="coffee"></i-feather>` |
| ![columns](https://unpkg.com/feather-icons@4.24.1/dist/icons/columns.svg) | `Columns` | `<i-feather name="columns"></i-feather>` |
| ![command](https://unpkg.com/feather-icons@4.24.1/dist/icons/command.svg) | `Command` | `<i-feather name="command"></i-feather>` |
| ![compass](https://unpkg.com/feather-icons@4.24.1/dist/icons/compass.svg) | `Compass` | `<i-feather name="compass"></i-feather>` |
| ![copy](https://unpkg.com/feather-icons@4.24.1/dist/icons/copy.svg) | `Copy` | `<i-feather name="copy"></i-feather>` |
| ![corner-down-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-down-left.svg) | `CornerDownLeft` | `<i-feather name="corner-down-left"></i-feather>` |
| ![corner-down-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-down-right.svg) | `CornerDownRight` | `<i-feather name="corner-down-right"></i-feather>` |
| ![corner-left-down](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-left-down.svg) | `CornerLeftDown` | `<i-feather name="corner-left-down"></i-feather>` |
| ![corner-left-up](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-left-up.svg) | `CornerLeftUp` | `<i-feather name="corner-left-up"></i-feather>` |
| ![corner-right-down](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-right-down.svg) | `CornerRightDown` | `<i-feather name="corner-right-down"></i-feather>` |
| ![corner-right-up](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-right-up.svg) | `CornerRightUp` | `<i-feather name="corner-right-up"></i-feather>` |
| ![corner-up-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-up-left.svg) | `CornerUpLeft` | `<i-feather name="corner-up-left"></i-feather>` |
| ![corner-up-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/corner-up-right.svg) | `CornerUpRight` | `<i-feather name="corner-up-right"></i-feather>` |
| ![cpu](https://unpkg.com/feather-icons@4.24.1/dist/icons/cpu.svg) | `Cpu` | `<i-feather name="cpu"></i-feather>` |
| ![credit-card](https://unpkg.com/feather-icons@4.24.1/dist/icons/credit-card.svg) | `CreditCard` | `<i-feather name="credit-card"></i-feather>` |
| ![crop](https://unpkg.com/feather-icons@4.24.1/dist/icons/crop.svg) | `Crop` | `<i-feather name="crop"></i-feather>` |
| ![crosshair](https://unpkg.com/feather-icons@4.24.1/dist/icons/crosshair.svg) | `Crosshair` | `<i-feather name="crosshair"></i-feather>` |
| ![database](https://unpkg.com/feather-icons@4.24.1/dist/icons/database.svg) | `Database` | `<i-feather name="database"></i-feather>` |
| ![delete](https://unpkg.com/feather-icons@4.24.1/dist/icons/delete.svg) | `Delete` | `<i-feather name="delete"></i-feather>` |
| ![disc](https://unpkg.com/feather-icons@4.24.1/dist/icons/disc.svg) | `Disc` | `<i-feather name="disc"></i-feather>` |
| ![dollar-sign](https://unpkg.com/feather-icons@4.24.1/dist/icons/dollar-sign.svg) | `DollarSign` | `<i-feather name="dollar-sign"></i-feather>` |
| ![download-cloud](https://unpkg.com/feather-icons@4.24.1/dist/icons/download-cloud.svg) | `DownloadCloud` | `<i-feather name="download-cloud"></i-feather>` |
| ![download](https://unpkg.com/feather-icons@4.24.1/dist/icons/download.svg) | `Download` | `<i-feather name="download"></i-feather>` |
| ![droplet](https://unpkg.com/feather-icons@4.24.1/dist/icons/droplet.svg) | `Droplet` | `<i-feather name="droplet"></i-feather>` |
| ![edit-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/edit-2.svg) | `Edit2` | `<i-feather name="edit-2"></i-feather>` |
| ![edit-3](https://unpkg.com/feather-icons@4.24.1/dist/icons/edit-3.svg) | `Edit3` | `<i-feather name="edit-3"></i-feather>` |
| ![edit](https://unpkg.com/feather-icons@4.24.1/dist/icons/edit.svg) | `Edit` | `<i-feather name="edit"></i-feather>` |
| ![external-link](https://unpkg.com/feather-icons@4.24.1/dist/icons/external-link.svg) | `ExternalLink` | `<i-feather name="external-link"></i-feather>` |
| ![eye-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/eye-off.svg) | `EyeOff` | `<i-feather name="eye-off"></i-feather>` |
| ![eye](https://unpkg.com/feather-icons@4.24.1/dist/icons/eye.svg) | `Eye` | `<i-feather name="eye"></i-feather>` |
| ![facebook](https://unpkg.com/feather-icons@4.24.1/dist/icons/facebook.svg) | `Facebook` | `<i-feather name="facebook"></i-feather>` |
| ![fast-forward](https://unpkg.com/feather-icons@4.24.1/dist/icons/fast-forward.svg) | `FastForward` | `<i-feather name="fast-forward"></i-feather>` |
| ![feather](https://unpkg.com/feather-icons@4.24.1/dist/icons/feather.svg) | `Feather` | `<i-feather name="feather"></i-feather>` |
| ![figma](https://unpkg.com/feather-icons@4.24.1/dist/icons/figma.svg) | `Figma` | `<i-feather name="figma"></i-feather>` |
| ![file-minus](https://unpkg.com/feather-icons@4.24.1/dist/icons/file-minus.svg) | `FileMinus` | `<i-feather name="file-minus"></i-feather>` |
| ![file-plus](https://unpkg.com/feather-icons@4.24.1/dist/icons/file-plus.svg) | `FilePlus` | `<i-feather name="file-plus"></i-feather>` |
| ![file-text](https://unpkg.com/feather-icons@4.24.1/dist/icons/file-text.svg) | `FileText` | `<i-feather name="file-text"></i-feather>` |
| ![file](https://unpkg.com/feather-icons@4.24.1/dist/icons/file.svg) | `File` | `<i-feather name="file"></i-feather>` |
| ![film](https://unpkg.com/feather-icons@4.24.1/dist/icons/film.svg) | `Film` | `<i-feather name="film"></i-feather>` |
| ![filter](https://unpkg.com/feather-icons@4.24.1/dist/icons/filter.svg) | `Filter` | `<i-feather name="filter"></i-feather>` |
| ![flag](https://unpkg.com/feather-icons@4.24.1/dist/icons/flag.svg) | `Flag` | `<i-feather name="flag"></i-feather>` |
| ![folder-minus](https://unpkg.com/feather-icons@4.24.1/dist/icons/folder-minus.svg) | `FolderMinus` | `<i-feather name="folder-minus"></i-feather>` |
| ![folder-plus](https://unpkg.com/feather-icons@4.24.1/dist/icons/folder-plus.svg) | `FolderPlus` | `<i-feather name="folder-plus"></i-feather>` |
| ![folder](https://unpkg.com/feather-icons@4.24.1/dist/icons/folder.svg) | `Folder` | `<i-feather name="folder"></i-feather>` |
| ![framer](https://unpkg.com/feather-icons@4.24.1/dist/icons/framer.svg) | `Framer` | `<i-feather name="framer"></i-feather>` |
| ![frown](https://unpkg.com/feather-icons@4.24.1/dist/icons/frown.svg) | `Frown` | `<i-feather name="frown"></i-feather>` |
| ![gift](https://unpkg.com/feather-icons@4.24.1/dist/icons/gift.svg) | `Gift` | `<i-feather name="gift"></i-feather>` |
| ![git-branch](https://unpkg.com/feather-icons@4.24.1/dist/icons/git-branch.svg) | `GitBranch` | `<i-feather name="git-branch"></i-feather>` |
| ![git-commit](https://unpkg.com/feather-icons@4.24.1/dist/icons/git-commit.svg) | `GitCommit` | `<i-feather name="git-commit"></i-feather>` |
| ![git-merge](https://unpkg.com/feather-icons@4.24.1/dist/icons/git-merge.svg) | `GitMerge` | `<i-feather name="git-merge"></i-feather>` |
| ![git-pull-request](https://unpkg.com/feather-icons@4.24.1/dist/icons/git-pull-request.svg) | `GitPullRequest` | `<i-feather name="git-pull-request"></i-feather>` |
| ![github](https://unpkg.com/feather-icons@4.24.1/dist/icons/github.svg) | `Github` | `<i-feather name="github"></i-feather>` |
| ![gitlab](https://unpkg.com/feather-icons@4.24.1/dist/icons/gitlab.svg) | `Gitlab` | `<i-feather name="gitlab"></i-feather>` |
| ![globe](https://unpkg.com/feather-icons@4.24.1/dist/icons/globe.svg) | `Globe` | `<i-feather name="globe"></i-feather>` |
| ![grid](https://unpkg.com/feather-icons@4.24.1/dist/icons/grid.svg) | `Grid` | `<i-feather name="grid"></i-feather>` |
| ![hard-drive](https://unpkg.com/feather-icons@4.24.1/dist/icons/hard-drive.svg) | `HardDrive` | `<i-feather name="hard-drive"></i-feather>` |
| ![hash](https://unpkg.com/feather-icons@4.24.1/dist/icons/hash.svg) | `Hash` | `<i-feather name="hash"></i-feather>` |
| ![headphones](https://unpkg.com/feather-icons@4.24.1/dist/icons/headphones.svg) | `Headphones` | `<i-feather name="headphones"></i-feather>` |
| ![heart](https://unpkg.com/feather-icons@4.24.1/dist/icons/heart.svg) | `Heart` | `<i-feather name="heart"></i-feather>` |
| ![help-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/help-circle.svg) | `HelpCircle` | `<i-feather name="help-circle"></i-feather>` |
| ![hexagon](https://unpkg.com/feather-icons@4.24.1/dist/icons/hexagon.svg) | `Hexagon` | `<i-feather name="hexagon"></i-feather>` |
| ![home](https://unpkg.com/feather-icons@4.24.1/dist/icons/home.svg) | `Home` | `<i-feather name="home"></i-feather>` |
| ![image](https://unpkg.com/feather-icons@4.24.1/dist/icons/image.svg) | `Image` | `<i-feather name="image"></i-feather>` |
| ![inbox](https://unpkg.com/feather-icons@4.24.1/dist/icons/inbox.svg) | `Inbox` | `<i-feather name="inbox"></i-feather>` |
| ![info](https://unpkg.com/feather-icons@4.24.1/dist/icons/info.svg) | `Info` | `<i-feather name="info"></i-feather>` |
| ![instagram](https://unpkg.com/feather-icons@4.24.1/dist/icons/instagram.svg) | `Instagram` | `<i-feather name="instagram"></i-feather>` |
| ![italic](https://unpkg.com/feather-icons@4.24.1/dist/icons/italic.svg) | `Italic` | `<i-feather name="italic"></i-feather>` |
| ![key](https://unpkg.com/feather-icons@4.24.1/dist/icons/key.svg) | `Key` | `<i-feather name="key"></i-feather>` |
| ![layers](https://unpkg.com/feather-icons@4.24.1/dist/icons/layers.svg) | `Layers` | `<i-feather name="layers"></i-feather>` |
| ![layout](https://unpkg.com/feather-icons@4.24.1/dist/icons/layout.svg) | `Layout` | `<i-feather name="layout"></i-feather>` |
| ![life-buoy](https://unpkg.com/feather-icons@4.24.1/dist/icons/life-buoy.svg) | `LifeBuoy` | `<i-feather name="life-buoy"></i-feather>` |
| ![link-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/link-2.svg) | `Link2` | `<i-feather name="link-2"></i-feather>` |
| ![link](https://unpkg.com/feather-icons@4.24.1/dist/icons/link.svg) | `Link` | `<i-feather name="link"></i-feather>` |
| ![linkedin](https://unpkg.com/feather-icons@4.24.1/dist/icons/linkedin.svg) | `Linkedin` | `<i-feather name="linkedin"></i-feather>` |
| ![list](https://unpkg.com/feather-icons@4.24.1/dist/icons/list.svg) | `List` | `<i-feather name="list"></i-feather>` |
| ![loader](https://unpkg.com/feather-icons@4.24.1/dist/icons/loader.svg) | `Loader` | `<i-feather name="loader"></i-feather>` |
| ![lock](https://unpkg.com/feather-icons@4.24.1/dist/icons/lock.svg) | `Lock` | `<i-feather name="lock"></i-feather>` |
| ![log-in](https://unpkg.com/feather-icons@4.24.1/dist/icons/log-in.svg) | `LogIn` | `<i-feather name="log-in"></i-feather>` |
| ![log-out](https://unpkg.com/feather-icons@4.24.1/dist/icons/log-out.svg) | `LogOut` | `<i-feather name="log-out"></i-feather>` |
| ![mail](https://unpkg.com/feather-icons@4.24.1/dist/icons/mail.svg) | `Mail` | `<i-feather name="mail"></i-feather>` |
| ![map-pin](https://unpkg.com/feather-icons@4.24.1/dist/icons/map-pin.svg) | `MapPin` | `<i-feather name="map-pin"></i-feather>` |
| ![map](https://unpkg.com/feather-icons@4.24.1/dist/icons/map.svg) | `Map` | `<i-feather name="map"></i-feather>` |
| ![maximize-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/maximize-2.svg) | `Maximize2` | `<i-feather name="maximize-2"></i-feather>` |
| ![maximize](https://unpkg.com/feather-icons@4.24.1/dist/icons/maximize.svg) | `Maximize` | `<i-feather name="maximize"></i-feather>` |
| ![meh](https://unpkg.com/feather-icons@4.24.1/dist/icons/meh.svg) | `Meh` | `<i-feather name="meh"></i-feather>` |
| ![menu](https://unpkg.com/feather-icons@4.24.1/dist/icons/menu.svg) | `Menu` | `<i-feather name="menu"></i-feather>` |
| ![message-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/message-circle.svg) | `MessageCircle` | `<i-feather name="message-circle"></i-feather>` |
| ![message-square](https://unpkg.com/feather-icons@4.24.1/dist/icons/message-square.svg) | `MessageSquare` | `<i-feather name="message-square"></i-feather>` |
| ![mic-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/mic-off.svg) | `MicOff` | `<i-feather name="mic-off"></i-feather>` |
| ![mic](https://unpkg.com/feather-icons@4.24.1/dist/icons/mic.svg) | `Mic` | `<i-feather name="mic"></i-feather>` |
| ![minimize-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/minimize-2.svg) | `Minimize2` | `<i-feather name="minimize-2"></i-feather>` |
| ![minimize](https://unpkg.com/feather-icons@4.24.1/dist/icons/minimize.svg) | `Minimize` | `<i-feather name="minimize"></i-feather>` |
| ![minus-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/minus-circle.svg) | `MinusCircle` | `<i-feather name="minus-circle"></i-feather>` |
| ![minus-square](https://unpkg.com/feather-icons@4.24.1/dist/icons/minus-square.svg) | `MinusSquare` | `<i-feather name="minus-square"></i-feather>` |
| ![minus](https://unpkg.com/feather-icons@4.24.1/dist/icons/minus.svg) | `Minus` | `<i-feather name="minus"></i-feather>` |
| ![monitor](https://unpkg.com/feather-icons@4.24.1/dist/icons/monitor.svg) | `Monitor` | `<i-feather name="monitor"></i-feather>` |
| ![moon](https://unpkg.com/feather-icons@4.24.1/dist/icons/moon.svg) | `Moon` | `<i-feather name="moon"></i-feather>` |
| ![more-horizontal](https://unpkg.com/feather-icons@4.24.1/dist/icons/more-horizontal.svg) | `MoreHorizontal` | `<i-feather name="more-horizontal"></i-feather>` |
| ![more-vertical](https://unpkg.com/feather-icons@4.24.1/dist/icons/more-vertical.svg) | `MoreVertical` | `<i-feather name="more-vertical"></i-feather>` |
| ![mouse-pointer](https://unpkg.com/feather-icons@4.24.1/dist/icons/mouse-pointer.svg) | `MousePointer` | `<i-feather name="mouse-pointer"></i-feather>` |
| ![move](https://unpkg.com/feather-icons@4.24.1/dist/icons/move.svg) | `Move` | `<i-feather name="move"></i-feather>` |
| ![music](https://unpkg.com/feather-icons@4.24.1/dist/icons/music.svg) | `Music` | `<i-feather name="music"></i-feather>` |
| ![navigation-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/navigation-2.svg) | `Navigation2` | `<i-feather name="navigation-2"></i-feather>` |
| ![navigation](https://unpkg.com/feather-icons@4.24.1/dist/icons/navigation.svg) | `Navigation` | `<i-feather name="navigation"></i-feather>` |
| ![octagon](https://unpkg.com/feather-icons@4.24.1/dist/icons/octagon.svg) | `Octagon` | `<i-feather name="octagon"></i-feather>` |
| ![package](https://unpkg.com/feather-icons@4.24.1/dist/icons/package.svg) | `Package` | `<i-feather name="package"></i-feather>` |
| ![paperclip](https://unpkg.com/feather-icons@4.24.1/dist/icons/paperclip.svg) | `Paperclip` | `<i-feather name="paperclip"></i-feather>` |
| ![pause-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/pause-circle.svg) | `PauseCircle` | `<i-feather name="pause-circle"></i-feather>` |
| ![pause](https://unpkg.com/feather-icons@4.24.1/dist/icons/pause.svg) | `Pause` | `<i-feather name="pause"></i-feather>` |
| ![pen-tool](https://unpkg.com/feather-icons@4.24.1/dist/icons/pen-tool.svg) | `PenTool` | `<i-feather name="pen-tool"></i-feather>` |
| ![percent](https://unpkg.com/feather-icons@4.24.1/dist/icons/percent.svg) | `Percent` | `<i-feather name="percent"></i-feather>` |
| ![phone-call](https://unpkg.com/feather-icons@4.24.1/dist/icons/phone-call.svg) | `PhoneCall` | `<i-feather name="phone-call"></i-feather>` |
| ![phone-forwarded](https://unpkg.com/feather-icons@4.24.1/dist/icons/phone-forwarded.svg) | `PhoneForwarded` | `<i-feather name="phone-forwarded"></i-feather>` |
| ![phone-incoming](https://unpkg.com/feather-icons@4.24.1/dist/icons/phone-incoming.svg) | `PhoneIncoming` | `<i-feather name="phone-incoming"></i-feather>` |
| ![phone-missed](https://unpkg.com/feather-icons@4.24.1/dist/icons/phone-missed.svg) | `PhoneMissed` | `<i-feather name="phone-missed"></i-feather>` |
| ![phone-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/phone-off.svg) | `PhoneOff` | `<i-feather name="phone-off"></i-feather>` |
| ![phone-outgoing](https://unpkg.com/feather-icons@4.24.1/dist/icons/phone-outgoing.svg) | `PhoneOutgoing` | `<i-feather name="phone-outgoing"></i-feather>` |
| ![phone](https://unpkg.com/feather-icons@4.24.1/dist/icons/phone.svg) | `Phone` | `<i-feather name="phone"></i-feather>` |
| ![pie-chart](https://unpkg.com/feather-icons@4.24.1/dist/icons/pie-chart.svg) | `PieChart` | `<i-feather name="pie-chart"></i-feather>` |
| ![play-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/play-circle.svg) | `PlayCircle` | `<i-feather name="play-circle"></i-feather>` |
| ![play](https://unpkg.com/feather-icons@4.24.1/dist/icons/play.svg) | `Play` | `<i-feather name="play"></i-feather>` |
| ![plus-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/plus-circle.svg) | `PlusCircle` | `<i-feather name="plus-circle"></i-feather>` |
| ![plus-square](https://unpkg.com/feather-icons@4.24.1/dist/icons/plus-square.svg) | `PlusSquare` | `<i-feather name="plus-square"></i-feather>` |
| ![plus](https://unpkg.com/feather-icons@4.24.1/dist/icons/plus.svg) | `Plus` | `<i-feather name="plus"></i-feather>` |
| ![pocket](https://unpkg.com/feather-icons@4.24.1/dist/icons/pocket.svg) | `Pocket` | `<i-feather name="pocket"></i-feather>` |
| ![power](https://unpkg.com/feather-icons@4.24.1/dist/icons/power.svg) | `Power` | `<i-feather name="power"></i-feather>` |
| ![printer](https://unpkg.com/feather-icons@4.24.1/dist/icons/printer.svg) | `Printer` | `<i-feather name="printer"></i-feather>` |
| ![radio](https://unpkg.com/feather-icons@4.24.1/dist/icons/radio.svg) | `Radio` | `<i-feather name="radio"></i-feather>` |
| ![refresh-ccw](https://unpkg.com/feather-icons@4.24.1/dist/icons/refresh-ccw.svg) | `RefreshCcw` | `<i-feather name="refresh-ccw"></i-feather>` |
| ![refresh-cw](https://unpkg.com/feather-icons@4.24.1/dist/icons/refresh-cw.svg) | `RefreshCw` | `<i-feather name="refresh-cw"></i-feather>` |
| ![repeat](https://unpkg.com/feather-icons@4.24.1/dist/icons/repeat.svg) | `Repeat` | `<i-feather name="repeat"></i-feather>` |
| ![rewind](https://unpkg.com/feather-icons@4.24.1/dist/icons/rewind.svg) | `Rewind` | `<i-feather name="rewind"></i-feather>` |
| ![rotate-ccw](https://unpkg.com/feather-icons@4.24.1/dist/icons/rotate-ccw.svg) | `RotateCcw` | `<i-feather name="rotate-ccw"></i-feather>` |
| ![rotate-cw](https://unpkg.com/feather-icons@4.24.1/dist/icons/rotate-cw.svg) | `RotateCw` | `<i-feather name="rotate-cw"></i-feather>` |
| ![rss](https://unpkg.com/feather-icons@4.24.1/dist/icons/rss.svg) | `Rss` | `<i-feather name="rss"></i-feather>` |
| ![save](https://unpkg.com/feather-icons@4.24.1/dist/icons/save.svg) | `Save` | `<i-feather name="save"></i-feather>` |
| ![scissors](https://unpkg.com/feather-icons@4.24.1/dist/icons/scissors.svg) | `Scissors` | `<i-feather name="scissors"></i-feather>` |
| ![search](https://unpkg.com/feather-icons@4.24.1/dist/icons/search.svg) | `Search` | `<i-feather name="search"></i-feather>` |
| ![send](https://unpkg.com/feather-icons@4.24.1/dist/icons/send.svg) | `Send` | `<i-feather name="send"></i-feather>` |
| ![server](https://unpkg.com/feather-icons@4.24.1/dist/icons/server.svg) | `Server` | `<i-feather name="server"></i-feather>` |
| ![settings](https://unpkg.com/feather-icons@4.24.1/dist/icons/settings.svg) | `Settings` | `<i-feather name="settings"></i-feather>` |
| ![share-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/share-2.svg) | `Share2` | `<i-feather name="share-2"></i-feather>` |
| ![share](https://unpkg.com/feather-icons@4.24.1/dist/icons/share.svg) | `Share` | `<i-feather name="share"></i-feather>` |
| ![shield-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/shield-off.svg) | `ShieldOff` | `<i-feather name="shield-off"></i-feather>` |
| ![shield](https://unpkg.com/feather-icons@4.24.1/dist/icons/shield.svg) | `Shield` | `<i-feather name="shield"></i-feather>` |
| ![shopping-bag](https://unpkg.com/feather-icons@4.24.1/dist/icons/shopping-bag.svg) | `ShoppingBag` | `<i-feather name="shopping-bag"></i-feather>` |
| ![shopping-cart](https://unpkg.com/feather-icons@4.24.1/dist/icons/shopping-cart.svg) | `ShoppingCart` | `<i-feather name="shopping-cart"></i-feather>` |
| ![shuffle](https://unpkg.com/feather-icons@4.24.1/dist/icons/shuffle.svg) | `Shuffle` | `<i-feather name="shuffle"></i-feather>` |
| ![sidebar](https://unpkg.com/feather-icons@4.24.1/dist/icons/sidebar.svg) | `Sidebar` | `<i-feather name="sidebar"></i-feather>` |
| ![skip-back](https://unpkg.com/feather-icons@4.24.1/dist/icons/skip-back.svg) | `SkipBack` | `<i-feather name="skip-back"></i-feather>` |
| ![skip-forward](https://unpkg.com/feather-icons@4.24.1/dist/icons/skip-forward.svg) | `SkipForward` | `<i-feather name="skip-forward"></i-feather>` |
| ![slack](https://unpkg.com/feather-icons@4.24.1/dist/icons/slack.svg) | `Slack` | `<i-feather name="slack"></i-feather>` |
| ![slash](https://unpkg.com/feather-icons@4.24.1/dist/icons/slash.svg) | `Slash` | `<i-feather name="slash"></i-feather>` |
| ![sliders](https://unpkg.com/feather-icons@4.24.1/dist/icons/sliders.svg) | `Sliders` | `<i-feather name="sliders"></i-feather>` |
| ![smartphone](https://unpkg.com/feather-icons@4.24.1/dist/icons/smartphone.svg) | `Smartphone` | `<i-feather name="smartphone"></i-feather>` |
| ![smile](https://unpkg.com/feather-icons@4.24.1/dist/icons/smile.svg) | `Smile` | `<i-feather name="smile"></i-feather>` |
| ![speaker](https://unpkg.com/feather-icons@4.24.1/dist/icons/speaker.svg) | `Speaker` | `<i-feather name="speaker"></i-feather>` |
| ![square](https://unpkg.com/feather-icons@4.24.1/dist/icons/square.svg) | `Square` | `<i-feather name="square"></i-feather>` |
| ![star](https://unpkg.com/feather-icons@4.24.1/dist/icons/star.svg) | `Star` | `<i-feather name="star"></i-feather>` |
| ![stop-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/stop-circle.svg) | `StopCircle` | `<i-feather name="stop-circle"></i-feather>` |
| ![sun](https://unpkg.com/feather-icons@4.24.1/dist/icons/sun.svg) | `Sun` | `<i-feather name="sun"></i-feather>` |
| ![sunrise](https://unpkg.com/feather-icons@4.24.1/dist/icons/sunrise.svg) | `Sunrise` | `<i-feather name="sunrise"></i-feather>` |
| ![sunset](https://unpkg.com/feather-icons@4.24.1/dist/icons/sunset.svg) | `Sunset` | `<i-feather name="sunset"></i-feather>` |
| ![tablet](https://unpkg.com/feather-icons@4.24.1/dist/icons/tablet.svg) | `Tablet` | `<i-feather name="tablet"></i-feather>` |
| ![tag](https://unpkg.com/feather-icons@4.24.1/dist/icons/tag.svg) | `Tag` | `<i-feather name="tag"></i-feather>` |
| ![target](https://unpkg.com/feather-icons@4.24.1/dist/icons/target.svg) | `Target` | `<i-feather name="target"></i-feather>` |
| ![terminal](https://unpkg.com/feather-icons@4.24.1/dist/icons/terminal.svg) | `Terminal` | `<i-feather name="terminal"></i-feather>` |
| ![thermometer](https://unpkg.com/feather-icons@4.24.1/dist/icons/thermometer.svg) | `Thermometer` | `<i-feather name="thermometer"></i-feather>` |
| ![thumbs-down](https://unpkg.com/feather-icons@4.24.1/dist/icons/thumbs-down.svg) | `ThumbsDown` | `<i-feather name="thumbs-down"></i-feather>` |
| ![thumbs-up](https://unpkg.com/feather-icons@4.24.1/dist/icons/thumbs-up.svg) | `ThumbsUp` | `<i-feather name="thumbs-up"></i-feather>` |
| ![toggle-left](https://unpkg.com/feather-icons@4.24.1/dist/icons/toggle-left.svg) | `ToggleLeft` | `<i-feather name="toggle-left"></i-feather>` |
| ![toggle-right](https://unpkg.com/feather-icons@4.24.1/dist/icons/toggle-right.svg) | `ToggleRight` | `<i-feather name="toggle-right"></i-feather>` |
| ![tool](https://unpkg.com/feather-icons@4.24.1/dist/icons/tool.svg) | `Tool` | `<i-feather name="tool"></i-feather>` |
| ![trash-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/trash-2.svg) | `Trash2` | `<i-feather name="trash-2"></i-feather>` |
| ![trash](https://unpkg.com/feather-icons@4.24.1/dist/icons/trash.svg) | `Trash` | `<i-feather name="trash"></i-feather>` |
| ![trello](https://unpkg.com/feather-icons@4.24.1/dist/icons/trello.svg) | `Trello` | `<i-feather name="trello"></i-feather>` |
| ![trending-down](https://unpkg.com/feather-icons@4.24.1/dist/icons/trending-down.svg) | `TrendingDown` | `<i-feather name="trending-down"></i-feather>` |
| ![trending-up](https://unpkg.com/feather-icons@4.24.1/dist/icons/trending-up.svg) | `TrendingUp` | `<i-feather name="trending-up"></i-feather>` |
| ![triangle](https://unpkg.com/feather-icons@4.24.1/dist/icons/triangle.svg) | `Triangle` | `<i-feather name="triangle"></i-feather>` |
| ![truck](https://unpkg.com/feather-icons@4.24.1/dist/icons/truck.svg) | `Truck` | `<i-feather name="truck"></i-feather>` |
| ![tv](https://unpkg.com/feather-icons@4.24.1/dist/icons/tv.svg) | `Tv` | `<i-feather name="tv"></i-feather>` |
| ![twitch](https://unpkg.com/feather-icons@4.24.1/dist/icons/twitch.svg) | `Twitch` | `<i-feather name="twitch"></i-feather>` |
| ![twitter](https://unpkg.com/feather-icons@4.24.1/dist/icons/twitter.svg) | `Twitter` | `<i-feather name="twitter"></i-feather>` |
| ![type](https://unpkg.com/feather-icons@4.24.1/dist/icons/type.svg) | `Type` | `<i-feather name="type"></i-feather>` |
| ![umbrella](https://unpkg.com/feather-icons@4.24.1/dist/icons/umbrella.svg) | `Umbrella` | `<i-feather name="umbrella"></i-feather>` |
| ![underline](https://unpkg.com/feather-icons@4.24.1/dist/icons/underline.svg) | `Underline` | `<i-feather name="underline"></i-feather>` |
| ![unlock](https://unpkg.com/feather-icons@4.24.1/dist/icons/unlock.svg) | `Unlock` | `<i-feather name="unlock"></i-feather>` |
| ![upload-cloud](https://unpkg.com/feather-icons@4.24.1/dist/icons/upload-cloud.svg) | `UploadCloud` | `<i-feather name="upload-cloud"></i-feather>` |
| ![upload](https://unpkg.com/feather-icons@4.24.1/dist/icons/upload.svg) | `Upload` | `<i-feather name="upload"></i-feather>` |
| ![user-check](https://unpkg.com/feather-icons@4.24.1/dist/icons/user-check.svg) | `UserCheck` | `<i-feather name="user-check"></i-feather>` |
| ![user-minus](https://unpkg.com/feather-icons@4.24.1/dist/icons/user-minus.svg) | `UserMinus` | `<i-feather name="user-minus"></i-feather>` |
| ![user-plus](https://unpkg.com/feather-icons@4.24.1/dist/icons/user-plus.svg) | `UserPlus` | `<i-feather name="user-plus"></i-feather>` |
| ![user-x](https://unpkg.com/feather-icons@4.24.1/dist/icons/user-x.svg) | `UserX` | `<i-feather name="user-x"></i-feather>` |
| ![user](https://unpkg.com/feather-icons@4.24.1/dist/icons/user.svg) | `User` | `<i-feather name="user"></i-feather>` |
| ![users](https://unpkg.com/feather-icons@4.24.1/dist/icons/users.svg) | `Users` | `<i-feather name="users"></i-feather>` |
| ![video-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/video-off.svg) | `VideoOff` | `<i-feather name="video-off"></i-feather>` |
| ![video](https://unpkg.com/feather-icons@4.24.1/dist/icons/video.svg) | `Video` | `<i-feather name="video"></i-feather>` |
| ![voicemail](https://unpkg.com/feather-icons@4.24.1/dist/icons/voicemail.svg) | `Voicemail` | `<i-feather name="voicemail"></i-feather>` |
| ![volume-1](https://unpkg.com/feather-icons@4.24.1/dist/icons/volume-1.svg) | `Volume1` | `<i-feather name="volume-1"></i-feather>` |
| ![volume-2](https://unpkg.com/feather-icons@4.24.1/dist/icons/volume-2.svg) | `Volume2` | `<i-feather name="volume-2"></i-feather>` |
| ![volume-x](https://unpkg.com/feather-icons@4.24.1/dist/icons/volume-x.svg) | `VolumeX` | `<i-feather name="volume-x"></i-feather>` |
| ![volume](https://unpkg.com/feather-icons@4.24.1/dist/icons/volume.svg) | `Volume` | `<i-feather name="volume"></i-feather>` |
| ![watch](https://unpkg.com/feather-icons@4.24.1/dist/icons/watch.svg) | `Watch` | `<i-feather name="watch"></i-feather>` |
| ![wifi-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/wifi-off.svg) | `WifiOff` | `<i-feather name="wifi-off"></i-feather>` |
| ![wifi](https://unpkg.com/feather-icons@4.24.1/dist/icons/wifi.svg) | `Wifi` | `<i-feather name="wifi"></i-feather>` |
| ![wind](https://unpkg.com/feather-icons@4.24.1/dist/icons/wind.svg) | `Wind` | `<i-feather name="wind"></i-feather>` |
| ![x-circle](https://unpkg.com/feather-icons@4.24.1/dist/icons/x-circle.svg) | `XCircle` | `<i-feather name="x-circle"></i-feather>` |
| ![x-octagon](https://unpkg.com/feather-icons@4.24.1/dist/icons/x-octagon.svg) | `XOctagon` | `<i-feather name="x-octagon"></i-feather>` |
| ![x-square](https://unpkg.com/feather-icons@4.24.1/dist/icons/x-square.svg) | `XSquare` | `<i-feather name="x-square"></i-feather>` |
| ![x](https://unpkg.com/feather-icons@4.24.1/dist/icons/x.svg) | `X` | `<i-feather name="x"></i-feather>` |
| ![youtube](https://unpkg.com/feather-icons@4.24.1/dist/icons/youtube.svg) | `Youtube` | `<i-feather name="youtube"></i-feather>` |
| ![zap-off](https://unpkg.com/feather-icons@4.24.1/dist/icons/zap-off.svg) | `ZapOff` | `<i-feather name="zap-off"></i-feather>` |
| ![zap](https://unpkg.com/feather-icons@4.24.1/dist/icons/zap.svg) | `Zap` | `<i-feather name="zap"></i-feather>` |
| ![zoom-in](https://unpkg.com/feather-icons@4.24.1/dist/icons/zoom-in.svg) | `ZoomIn` | `<i-feather name="zoom-in"></i-feather>` |
| ![zoom-out](https://unpkg.com/feather-icons@4.24.1/dist/icons/zoom-out.svg) | `ZoomOut` | `<i-feather name="zoom-out"></i-feather>` |


### FAQ

**1. Is there a way to pick all the icons at once?**

Yes, by importing `allIcons` from `'angular-feather/icons'`:

```ts
import { allIcons } from 'angular-feather/icons';

@NgModule({
  imports: [
    FeatherModule.pick(allIcons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
```

However, keep in mind that by doing this, all icons will end up in your application bundle. While this may not be much of an issue for prototyping, it is not recommended for any application that you plan to release.

### License

MIT © [Michael Bazos](mailto:micabazos@gmail.com)
