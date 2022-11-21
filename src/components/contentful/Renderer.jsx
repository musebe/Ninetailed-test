import useEntries from './useEntries';
import * as Contentful from 'contentful';
import {
  ExperienceEntry,
  ExperienceMapper,
  isEntry,
} from '@ninetailed/experience.js-utils-contentful';
import { Experience } from '@ninetailed/experience.js-react';
import React from 'react';
import { get } from 'lodash';
import Cta from "../Cta";

export const ComponentContentTypes = {
  Greetings: 'greetings',
};


// const Greeting: React.FC<any> = ({ fields }) => {
//   return <div>{fields.description}</div>;
// };

const ContentTypeMap = {
  [ComponentContentTypes.Greetings]: Cta,
};





const ComponentRenderer = (props) => {
  const contentTypeId = get(props, 'sys.contentType.sys.id') ;
  const Component = ContentTypeMap[contentTypeId];

  console.log(contentTypeId)

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  // @ts-ignore
  return <Component {...props} />;
};

export const BlockRenderer = ({ block }) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => {
          return <BlockRenderer key={`block-${b.sys.id}`} block={b} />;
        })}
      </>
    );
  }

  const contentTypeId = get(block, 'sys.contentType.sys.id');
  const { id } = block.sys;
  const componentProps = {
    ...block,
    parent: block.parent,
  };

  const experiences = (componentProps.fields.nt_experiences || [])
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .filter(isEntry)
    .map((experience) => {
      return ExperienceMapper.mapExperience(experience);
    });

  /* console.log(experiences); */
  return (
    <div key={`${contentTypeId}-${id}`}>
      <Experience
        {...componentProps}
        id={id}
        // @ts-ignore
        component={ComponentRenderer}
        experiences={experiences}
      />
    </div>
  );
};