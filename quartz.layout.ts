import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { IconFolderOptions } from "./quartz/plugins/components/FileIcons";

const iconsOptions: IconFolderOptions = {
  rootIconFolder: "quartz/static/icons",
  default: {
    file: "file",
  },
};

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Search(),
	Component.Darkmode(),
	],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
	Component.DesktopOnly(
      Component.ExplorerBurger({
        folderClickBehavior: "link",
        folderDefaultState: "collapsed",
        useSavedState: true,
        title: "",
        iconSettings: iconsOptions,
      }),
    ),
    Component.DesktopOnly(Component.Explorer({
	  title: "Pages", // title of the explorer component
	  folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
	  folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
	  useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
	})),
  ],
  right: [
    //Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
	Component.Breadcrumbs(), 
	Component.ArticleTitle(), 
	Component.ContentMeta(),
	Component.TagList(),
   ],
  left: [
    Component.PageTitle(),	
    Component.MobileOnly(Component.Spacer()),
	Component.DesktopOnly(
      Component.ExplorerBurger({
        folderClickBehavior: "link",
        folderDefaultState: "collapsed",
        useSavedState: true,
        title: "",
        iconSettings: iconsOptions,
      }),
    ),
    Component.DesktopOnly(Component.Explorer({
	  title: "Pages", // title of the explorer component
	  folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
	  folderDefaultState: "collapsed", // default state of folders ("collapsed" or "open")
	  useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
	})),
  ],
  right: [
    //Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}
