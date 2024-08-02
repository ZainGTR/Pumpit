"use client";
import { useQuery } from "@/app/hooks";
import { useSessionContext } from "./contextProvider";
import { useEffect } from "react";

export type User = {
  name: string;
  id: number;
  account: number;
};

export type Page = {
  ticker: string;
  name: string;
  id: number;
  account: number;
};
export type PostDto = {
  timestamp: number;
  page: Page;
  content: string;
};
export type GetPostsReturnType = {
  pointer: number;
  posts: PostDto[];
};

export default function NewsFeed() {
  const session = useSessionContext();
  const accountId = session?.account.id;
  const { result: userName } = useQuery<string>(
    "get_user_name",
    accountId ? { user_id: accountId } : undefined
  );
  // const { result: followersCount } = useQuery<number>(
  //   "get_followers_count",
  //   accountId ? { user_id: accountId } : undefined
  // );

  const { result: followingCount } = useQuery<number>(
    "get_following_count",
    accountId ? { user_id: accountId } : undefined
  );
  const { result: newsFeed, reload: reloadPosts } =
    useQuery<GetPostsReturnType>(
      "get_posts",
      accountId ? { user_id: accountId, n_posts: 10, pointer: 0 } : undefined
    );

  // Refresh posts every 10 seconds
  useEffect(() => {
    const refreshPosts = setInterval(() => {
      reloadPosts();
    }, 10000);
    return () => {
      clearInterval(refreshPosts);
    };
  });

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{userName}</h1>

        <div className="flex text-center">
          {/* Followers Box */}
          {/* <div className="bg-white m-1 p-2 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Followers</h3>
            <p className="text-3xl font-bold">{followersCount}</p>
          </div> */}

          {/* Following Box */}
          <div className="bg-white m-1 p-2 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Following</h3>
            <p className="text-3xl font-bold">{followingCount}</p>
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="bg-white p-4 rounded-lg shadow">
        <ul>
          {newsFeed ? (
            newsFeed.posts.map((post, index) => (
              <li key={index} className="mb-4">
                <div className="flex">
                  <div className="font-semibold">{post.page.name}</div>
                  <div className="text-gray-500 text-sm ml-2">
                    {new Date(post.timestamp).toLocaleString()}
                  </div>
                </div>
                <div className="mt-2">{post.content}</div>
                {/* Add a horizontal line between posts */}
                <hr className="my-4 border-t border-gray-300" />
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </div>
  );
}
