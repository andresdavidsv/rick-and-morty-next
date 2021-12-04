import React from 'react';
import { AcademicCapIcon, LightningBoltIcon, BriefcaseIcon } from '@heroicons/react/outline';
const features = [
  {
    name: 'Next.Js',
    description:
      'Next.js is a JavaScript framework that allows us to easily create production-ready React websites.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Apollo Client',
    description:
      'Apollo Client is a JavaScript client for GraphQL designed to be able to create components that make use of GraphQL. These components can retrieve and display data or make changes or mutations when certain actions occur.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Graphql',
    description:
      'GraphQLs essential objective is to offer clients a more direct, simple and efficient way to obtain exactly the data they require, through a powerful and dynamic protocol.',
    icon: LightningBoltIcon,
  }
]

export const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Applying new knowledge.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Application made in NextJs, to consume the Riack and Morty api of Graphql.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About;
