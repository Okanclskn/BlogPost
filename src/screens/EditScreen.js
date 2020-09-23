import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../constext/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostFrom
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    ></BlogPostFrom>
  );
};

const styles = StyleSheet.create({});
export default EditScreen;
