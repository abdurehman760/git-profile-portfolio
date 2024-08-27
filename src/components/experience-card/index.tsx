import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  description,
  certificateLink,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  description?: React.ReactNode;
  certificateLink?: {
    text: string;
    url: string;
  };
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold text-lg text-blue-700">{position}</h3> {/* Style the position */}
    <div className="mb-4 font-normal">
      {companyLink ? (
        <a
          href={companyLink}
          target="_blank"
          rel="noreferrer"
          className=" hover:underline font-semibold"  // Styled company link
        >
          {company}
        </a>
      ) : (
        <span className=" font-semibold">{company}</span>  // Styled company name
      )}
    </div>
     {description && (
      <div className="text-sm  mt-1 leading-relaxed">
        {description}
      </div>
    )}
    {certificateLink && (
      <div className="mt-2">
        <a
          href={certificateLink.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          {certificateLink.text}
        </a>
      </div>
    )}
  </li>
);

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          description={skeleton({
            widthCls: 'w-10/12',
            heightCls: 'h-3',
            className: 'my-2',
          })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Experience</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences.map((experience, index) => (
                  <ListItem
                    key={index}
                    time={`${experience.from} - ${experience.to}`}
                    position={experience.position}
                    company={experience.company}
                    companyLink={experience.companyLink}
                    description={experience.description}
                    certificateLink={experience.certificateLink}
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
