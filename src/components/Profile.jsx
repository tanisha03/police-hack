// import { RESPONSE } from "@/utils/mock";
import React, { useState } from "react";
import Icon from "./Icon";
import { ENUM_IMAGE_MAPPER } from "../utils/constant";

export default function Profile({ response: RESPONSE }) {
  const [imageArr, setImageArr] = useState(RESPONSE.imageUrls);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <div class="flex mb-12">
        <div class="w-80 h-70 bg-slate-100 object-contain rounded-xl mr-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div class="w-full h-50">
            <img
              className="w-full h-full bg-cover rounded-t-xl"
              alt=""
              src={imageArr?.[imageIndex]}
            />
          </div>
          <div className="mt-6 flex justify-center px-6 pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 mr-8 p-2 bg-slate-300 rounded-3xl cursor-pointer"
              onClick={() =>
                imageIndex === 0
                  ? setImageIndex(imageArr.length - 1)
                  : setImageIndex(imageIndex - 1)
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 p-2 bg-slate-300 rounded-3xl cursor-pointer"
              onClick={() =>
                imageIndex === imageArr.length - 1
                  ? setImageIndex(0)
                  : setImageIndex(imageIndex + 1)
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div class="w-80 h-70 bg-slate-100 object-contain p-6 rounded-xl mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-slate-500"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          {RESPONSE.name ? (
            <div class="mt-4">
              <div class="flex items-center">
                <h1 class="text-xl font-semibold mr-2">{RESPONSE.name}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ) : null}
          {RESPONSE.gender ? (
            <div class="text-md ml-1 font-bold text-gray-500">
              {RESPONSE.gender.toUpperCase()}
            </div>
          ) : null}
          {RESPONSE.email ? (
            <div class="my-1.5">
              <div class="flex items-center">
                <Icon name="email" />
                <h2 class="text-md ml-1 text-gray-500">{RESPONSE.email}</h2>
              </div>
            </div>
          ) : null}
          {RESPONSE.primaryAddress ? (
            <div class="flex items-center my-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-slate-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 class="text-md ml-1 text-gray-500">
                {RESPONSE.primaryAddress}
              </h2>
            </div>
          ) : null}
          {JSON.parse(RESPONSE?.tagsApplicable).length ? (
            <div class="mt-4 flex flex-wrap">
              {JSON.parse(RESPONSE?.tagsApplicable)?.map((tag, i) => (
                <span
                  key={i}
                  class="bg-blue-100 text-blue-800 text-xs font-medium m-1 px-3 py-1.5 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          {RESPONSE?.whatsappDetails?.isAvailable ? (
            <div class="my-4">
              <h1 className="text-gray-500 font-semibold text-sm mb-1">
                Active Accounts
              </h1>
              <a target="__blank" href={RESPONSE?.whatsappDetails?.link}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-12 h-12 bg-cover rounded-xl m-1"
                  alt=""
                  src={ENUM_IMAGE_MAPPER.WHATSAPP}
                />
              </a>
            </div>
          ) : null}
          {RESPONSE?.financialFootprint &&
          Object.keys(RESPONSE?.financialFootprint)?.length ? (
            <div class="my-4">
              <h1 className="text-gray-500 font-semibold text-sm mb-1">
                Financial Accounts
              </h1>
              <div class="flex">
                {Object.keys(RESPONSE?.financialFootprint).map((key, i) =>
                  RESPONSE?.financialFootprint[key]?.isAvailable ? (
                    <div key={key}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-12 h-12 bg-cover rounded-xl m-1"
                        alt=""
                        src={ENUM_IMAGE_MAPPER[key.toUpperCase()]}
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ) : null}
        </div>
        <div class="h-70 grow bg-slate-100 object-contain p-6 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-slate-500"
          >
            <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
          </svg>
          {RESPONSE?.availableApps?.length ? (
            <div class="mt-4">
              <div class="mb-4">
                <h1 className="text-gray-500 font-semibold text-sm mb-2">
                  Might be available on
                </h1>
                <div class="flex items-center">
                  {RESPONSE?.availableApps.map((appEnum) => (
                    // eslint-disable-next-line react/jsx-key
                    <img
                      className="w-12 h-12 bg-cover rounded-xl m-1"
                      alt=""
                      src={ENUM_IMAGE_MAPPER[appEnum]}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          {JSON.parse(RESPONSE?.additionalAddress).length ? (
            <div class="mb-4">
              <h1 className="text-gray-500 font-semibold text-sm mb-1">
                Also, found in
              </h1>
              <div class="flex flex-wrap">
                {JSON.parse(RESPONSE?.additionalAddress)?.map((tag, i) => (
                  <span
                    key={i}
                    class="bg-yellow-100 text-yellow-800 text-xs font-medium m-1 px-3 py-2 rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {RESPONSE?.relatedPeople.length
            ? RESPONSE?.relatedPeople.map((platformData, i) =>
                Object.keys(platformData.details).length ? (
                  <div class="mb-2" key={i}>
                    <span className="text-gray-500 font-semibold text-sm flex items-center">
                      Possible connections on{"   "}
                      <div class="w-7 h-7">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="bg-cover rounded-lg m-1 ml-2"
                          alt=""
                          src={ENUM_IMAGE_MAPPER[platformData?.platform]}
                        />
                      </div>
                    </span>
                    <div class=" flex flex-wrap">
                      {Object.keys(platformData.details).map((key, index) =>
                        !platformData.details[key].twitter_profile_url ||
                        platformData.details[key].twitter_profile_url === "" ? (
                          <a
                            target="__blank"
                            href={platformData.details[key].twitter_url}
                            key={index}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-12 h-12 text-gray-700"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        ) : (
                          <a
                            target="__blank"
                            href={platformData.details[key].twitter_url}
                            key={index}
                          >
                            <div class="w-12 h-12 mr-1">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                className="bg-cover rounded-3xl m-1 ml-2"
                                alt=""
                                src={
                                  platformData.details[key].twitter_profile_url
                                }
                              />
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ) : null
              )
            : null}
        </div>
      </div>
      {RESPONSE?.socialFootprint?.twitter?.length ? (
        <div class="w-full mb-8 p-6 bg-slate-100 rounded-xl">
          <h3 class="text-lg font-semibold text-gray-600 mb-8">
            Twitter Footprints
          </h3>
          <div className="flex">
            {RESPONSE?.socialFootprint?.twitter.map((data, index) =>
              !data.profileUrl || data.profileUrl === "" ? (
                <a target="__blank" href={data.url} key={index}>
                  <div class="w-36 h-36 mr-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-36 h-36 text-gray-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="bg-red-400 text-gray-100 p-1, rounded-full h-14 w-14 flex items-center justify-center">{`${Math.ceil(data?.confidenceScore)}%`}</div>
                </a>
              ) : (
                <a target="__blank" href={data.url} key={index}>
                  <div class="w-36 h-36 mr-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="bg-cover m-1 ml-2 rounded-full w-36 h-36 bg-cover"
                      alt=""
                      src={data.profileUrl}
                    />
                  </div>
                  <div class="bg-red-400 text-gray-100 p-1, rounded-full h-14 w-14 flex items-center justify-center">{`${Math.ceil(data?.confidenceScore)}%`}</div>
                </a>
              )
            )}
          </div>
        </div>
      ) : null}
      {RESPONSE?.socialFootprint?.instagram?.length ? (
        <div class="w-full mb-8 p-6 bg-slate-100 rounded-xl">
          <h3 class="text-lg font-semibold text-gray-600 mb-8">
            Instagram Footprints
          </h3>
          <div className="flex">
            {RESPONSE?.socialFootprint?.instagram.map((data, index) =>
              !data.profileUrl || data.profileUrl === "" ? (
                <a target="__blank" href={data.url} key={index}>
                  <div class="w-40 h-40 mr-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-40 h-40 text-gray-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="bg-red-400 text-gray-100 p-1, rounded-full h-14 w-14 flex items-center justify-center">{`${Math.ceil(data?.confidenceScore)}%`}</div>
                </a>
              ) : (
                <a target="__blank" href={data.url} key={index}>
                  <div class="w-36 h-36 mr-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="bg-cover m-1 ml-2 rounded-full"
                      alt=""
                      src={data.profileUrl}
                    />
                  </div>
                  <div class="bg-red-400 text-gray-100 p-1, rounded-full h-14 w-14 flex items-center justify-center">{`${Math.ceil(data?.confidenceScore)}%`}</div>
                </a>
              )
            )}
          </div>
        </div>
      ) : null}
      {RESPONSE?.socialFootprint?.facebook?.length ? (
        <div class="w-full mb-8 p-6 bg-slate-100 rounded-xl">
          <h3 class="text-lg font-semibold text-gray-600 mb-8">
            Facebook Footprints
          </h3>
          <div className="flex">
            {RESPONSE?.socialFootprint?.facebook.map((data, index) =>
              !data.profileUrl || data.profileUrl === "" ? (
                <a target="__blank" href={data.url} key={index}>
                  <div class="w-40 h-40 mr-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-40 h-40 text-gray-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="bg-red-400 text-gray-100 p-1, rounded-full h-14 w-14 flex items-center justify-center">{`${Math.ceil(data?.confidenceScore)}%`}</div>
                </a>
              ) : (
                <a target="__blank" href={data.url} key={index}>
                  <div class="w-36 h-36 mr-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="bg-cover m-1 ml-2 rounded-full"
                      alt=""
                      src={data.profileUrl}
                    />
                  </div>
                  <div class="bg-red-400 text-gray-100 p-1, rounded-full h-14 w-14 flex items-center justify-center">{`${Math.ceil(data?.confidenceScore)}%`}</div>
                </a>
              )
            )}
          </div>
        </div>
      ) : null}
      {RESPONSE?.informationFootprint.length ? (
        <div class="w-full mb-8 p-6 bg-slate-100 rounded-xl">
          <h3 class="text-lg font-semibold text-gray-600 mb-4">
            Related Links
          </h3>
          <div>
            {RESPONSE?.informationFootprint.map((link, i) => (
              <a target="__blank" key={i} class="flex underline items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 m-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {link.url}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
