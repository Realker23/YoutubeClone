const useFunction = () => {
  const addComment = (tree, commentId, newComment) => {
    const newTree = [...tree];

    newTree.map((b) => {
      if (b.id === commentId) {
        b.replies.unshift(newComment);
      } else {
        addComment(b.replies, commentId, newComment);
      }
    });
    return newTree;
  };

  //   const deleteComment = (tree, commentId) => {
  //     let newTree = [...tree];
  //     newTree.map((b) => {
  //       if (b.id === commentId) {
  //        return newTree.filter((e) => e.id !== commentId);
  //       }
  //       deleteComment(b.replies, commentId);
  //     });
  //     return newTree;
  //   };

  const deleteComment = (tree, commentId) => {
    let newTree = [...tree];
    newTree.map((b) => {
      if (b.id === commentId) {
        newTree = newTree.filter((e) => e.id !== commentId);
        return newTree;
      } else {
        deleteComment(b.replies, commentId);
      }
    });
    // console.log(newTree, "hello");
    return newTree;
  };

  return {addComment, deleteComment};
};

export default useFunction;
