import { useStaticQuery, graphql } from "gatsby"

const useLinks = () => {
  const query = useStaticQuery(
    graphql`
      query {
        publications(list: { elemMatch: { title: { regex: "/.*/" } } }) {
          list {
            title
          }
        }
      }
    `
  )

  const links = []

  if (query.publications) {
    links.push("publications"), links.push("cv")
  }

  return links
}

export default useLinks
