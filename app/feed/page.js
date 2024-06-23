import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// export const metadata = {
//   title: "All Posts",
//   description: "Browse all our posts!",
// };

export async function generateMetadata() {
  const numPosts = (await getPosts()).length;
  return {
    title: "All Posts",
    description: `Browse our all ${numPosts} posts!`,
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
