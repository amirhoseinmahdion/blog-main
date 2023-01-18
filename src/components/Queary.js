import { gql } from "@apollo/client";

 const GET_BLOGS = gql`

 query{
    posts {
      author {
        slug
        name
        photo {
          url
        }
      }
      title
      id
      slug
      coverphoto {
        url
      }
    }
  }
  

`;
const GET_AUTHOR = gql`


query{
  authors {
    photo {
      url
    }
    name
    slug
    id
    describ {
      text
    }
    field
  }
}

`;

const GET_SINGLE_AUTHOR = gql`
query MyQuery($slug:String!) {
  author(where: {slug: $slug}) {
    photo {
      url
    }
    name
    field
    describ {
      html
    }
    posts {
      coverphoto {
        url
      }
      slug
      title
      id
    }
  }
}
`
;

const GET_SINGLE_POST = gql`

query singlepost($slug:String!){
  post(where: {slug: $slug}) {
    author{
      photo{
        url
      }
      name
      field
    }
    title
    content {
      html
    }
    coverphoto {
      url
    }
    
  }
}

`

const GET_COMMENTS = gql`
query getcoment($slug:String!) {
  coments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}


`
export {GET_BLOGS, GET_AUTHOR , GET_SINGLE_AUTHOR , GET_SINGLE_POST , GET_COMMENTS};
