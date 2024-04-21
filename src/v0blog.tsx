import React from 'react';

const voblogComponent: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <header className="bg-gray-100 py-6 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            The Acme Blog
          </h1>
        </div>
      </header>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="space-y-8">
          <article className="border-b border-gray-200 pb-8 dark:border-gray-800">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                The Importance of Accessibility in Web Design
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>By John Doe</span>
                <span className="mx-2">•</span>
                <span>May 15, 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                In today's digital landscape, accessibility in web design is
                crucial for ensuring that everyone, regardless of their
                abilities, can access and engage with online content. By
                prioritizing accessibility, we can create inclusive experiences
                that empower users and foster a more equitable digital world.
              </p>
            </div>
          </article>
          <article className="border-b border-gray-200 pb-8 dark:border-gray-800">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                The Rise of Sustainable Design in the 21st Century
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>By Jane Smith</span>
                <span className="mx-2">•</span>
                <span>April 30, 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                As the world becomes increasingly conscious of its environmental
                impact, sustainable design has emerged as a crucial
                consideration for businesses and individuals alike. In this
                article, we explore the principles of sustainable design and how
                they are shaping the future of our built environment.
              </p>
            </div>
          </article>
          <article className="border-b border-gray-200 pb-8 dark:border-gray-800">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                The Future of Artificial Intelligence in User Experience
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>By Sarah Lee</span>
                <span className="mx-2">•</span>
                <span>March 20, 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                As artificial intelligence (AI) continues to evolve, its
                integration into user experience (UX) design is becoming
                increasingly prevalent. In this article, we explore the
                potential of AI-powered UX and how it can enhance the way users
                interact with digital products and services.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default voblogComponent;
