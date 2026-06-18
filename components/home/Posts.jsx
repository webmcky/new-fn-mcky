'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function InstagramFeed() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/instagram/post")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;
  if (data.error) return <p className="p-6 text-red-500">{data.error}</p>;

  const { profile, stats, posts } = data;

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Header Profil */}
      <div className="flex items-center gap-6 mb-6">
        <Image
          src={profile.image}
          alt={profile.username}
          className="w-20 h-20 rounded-full border-2 border-gray-700"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-gray-400">@{profile.username}</p>
            </div>
            <button className="px-4 py-1 bg-blue-500 rounded hover:bg-blue-600">
              Follow
            </button>
          </div>
          <div className="flex gap-6 mt-3 text-gray-300">
            <div><span className="font-bold">{stats.followersCount}</span> followers</div>
            <div><span className="font-bold">{posts.length}</span> posts</div>
          </div>
          <p className="mt-2 text-gray-400 whitespace-pre-line">{profile.description}</p>
        </div>
      </div>

      {/* Grid Posts */}
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-gray-800 rounded overflow-hidden">
            <img
              src={post.image || post.thumbnail}
              alt={post.caption || ""}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-white">
              <p className="text-sm">{post.caption || "No caption"}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
