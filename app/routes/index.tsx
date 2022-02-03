import React from 'react';
import type { LoaderFunction, MetaFunction } from 'remix';
import { json, useLoaderData } from 'remix';

type IndexData = {
  resources: Array<{ name: string; url: string }>;
};

export const loader: LoaderFunction = async () => {
  const data: IndexData = {
    resources: [
      {
        name: 'git - the simple guide',
        url: 'https://rogerdudler.github.io/git-guide/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com',
      },
      {
        name: 'DTU Space Hydro project',
        url: 'https://github.com/DTUHydroSpace',
      },
    ],
  };

  return json(data);
};

export const meta: MetaFunction = () => ({
  title: 'Space Blog',
  description: 'Welcome to Space Blog!',
});

export default function Index() {
  const data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Space Blog!</h2>
        <p>I&apos;m stoked that you&apos;re here. 🥳</p>
        <p>
          This blog isn&apos;t really a blog about space, but it <i>is</i> an
          introduction to how you can use Git to work collaboratively on code
          and even deploy it to the web!
        </p>
        <p>
          You won&apos;t actually find Git guides on this site, it is only used
          as an example for a live demo. Sorry!
        </p>
      </main>
      <aside>
        <h2>Resources</h2>
        <ul>
          {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
