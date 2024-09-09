import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const logoDirectory = cfg?.logoDir ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
	  <a class={classNames(displayClass, "center-page-title")} href={baseDir}><img width="20" height="20" src={logoDirectory} style="vertical-align:middle"/>{title}</a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  
  font-size: 1.5rem;
  margin: 0;
}
.center-page-title{
  vertical-align:middle;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
