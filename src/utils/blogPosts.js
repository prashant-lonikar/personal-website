function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.replace(/^\.\//, '').replace(/\.md\.js$/, ''),
    module: r(fileName)
  }));
}

const posts = importAll(require.context('../blogPosts', true, /\.md\.js$/));

export function getSortedPostsData() {
  const allPostsData = posts.map(({ module, link }) => ({
    id: link,
    ...module.metadata,
    content: module.content // Include the full content of the post
  }));

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(id) {
  const post = posts.find(post => post.link === id);
  if (!post) {
    console.error(`Post with id ${id} not found`);
    return null;
  }
  return {
    id,
    ...post.module.metadata,
    content: post.module.content
  };
}