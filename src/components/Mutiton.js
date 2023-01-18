import { gql } from "@apollo/client";

const ADD_COMENTS = gql`
  mutation MyMutation(
    $name: String!
    $emile: String!
    $text: String!
    $slug: String!
  ) {
    createComent(
      data: {
        name: $name
        emile: $emile
        text: $text
        post: { connect: { slug: $slug } }
      }
    )
  }
`;
export { ADD_COMENTS };
