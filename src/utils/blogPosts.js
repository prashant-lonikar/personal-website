function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.replace(/^\.\//, '').replace(/\.md\.js$/, ''),
    module: r(fileName)
  }));
}

const posts = importAll(require.context('../blogPosts', true, /\.md\.js$/));
console.log('Imported posts:', posts);

export function getSortedPostsData() {
  const allPostsData = posts.map(({ module, link }) => ({
    id: link,
    ...module.metadata
  }));

  console.log('All posts data:', allPostsData);

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
  console.log('Searching for post with id:', id);
  const post = posts.find(post => post.link === id);
  if (!post) {
    console.error(`Post with id ${id} not found`);
    return null;
  }
  console.log('Found post:', post);
  return {
    id,
    ...post.module.metadata,
    content: post.module.content
  };
}