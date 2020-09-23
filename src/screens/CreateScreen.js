import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../constext/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostFrom
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    ></BlogPostFrom>
  );
};

const styles = StyleSheet.create({});
export default CreateScreen;
