import React, { useState } from "react";
import Icon from "./Icon";
import { ENUM_IMAGE_MAPPER } from "../utils/constant";

export default function HTMLProfile({ response: RESPONSE }) {
  return (
    <div>
      <div STYLE="display: flex; flex-wrap: wrap">
        {RESPONSE?.imageUrls?.map((img) => (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={img}
              STYLE="width:240px; margin: 12px; border-radius: 40px"
            />
          </>
        ))}
      </div>
      <div STYLE="margin-top: 12px; padding-horizontal: 24px">
        {RESPONSE?.name ? (
          <h1 STYLE="font-size: 28px">{RESPONSE?.name}</h1>
        ) : null}
        {RESPONSE?.gender ? (
          <div STYLE="font-size: 16px; font-weight: 700; color: gray">
            {RESPONSE?.gender.toUpperCase()}
          </div>
        ) : null}
        {RESPONSE?.email ? (
          <div STYLE="font-size: 16px; font-weight: 700; color: gray">
            {RESPONSE?.email}
          </div>
        ) : null}
        {RESPONSE?.primaryAddress ? (
          <div STYLE="font-size: 16px; font-weight: 700; color: gray">
            {RESPONSE?.primaryAddress}
          </div>
        ) : null}
        {JSON.parse(RESPONSE?.tagsApplicable).length ? (
          <div STYLE="display: flex; margin-top: 8px">
            {JSON.parse(RESPONSE?.tagsApplicable)?.map((tag, i) => (
              <span
                key={i}
                STYLE="padding: 8px; background: #DBE9FE; color: blue; border-radius: 8px; margin-right: 8px;"
                // class="bg-blue-100 text-blue-800 text-xs font-medium m-1 px-3 py-1.5 rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {RESPONSE?.whatsappDetails?.isAvailable ? (
          <div STYLE="margin-top: 16px">
            <div STYLE="font-size: 14px; font-weight: 700; color: gray; margin-bottom: 4px">
              Active Accounts
            </div>
            <a target="__blank" href={RESPONSE?.whatsappDetails?.link}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                STYLE="width: 40px; height: 40px; border-radius: 4px; margin-right: 2px;"
                alt=""
                src={ENUM_IMAGE_MAPPER.WHATSAPP}
              />
            </a>
          </div>
        ) : null}
      </div>
      <div STYLE="margin-top: 12px; padding-horizontal: 24px">
        {RESPONSE?.availableApps?.length ? (
          <div STYLE="margin-top: 16px">
            <div STYLE="font-size: 14px; font-weight: 700; color: gray; margin-bottom: 4px">
              Might be available on
            </div>
            <div STYLE="display: flex; flex-wrap: wrap">
              {RESPONSE?.availableApps?.map((appEnum) => (
                // eslint-disable-next-line react/jsx-key
                <img
                  STYLE="width: 40px; height: 40px; border-radius: 4px; margin-right: 2px;"
                  alt=""
                  src={ENUM_IMAGE_MAPPER[appEnum]}
                />
              ))}
            </div>
          </div>
        ) : null}
        {JSON.parse(RESPONSE?.additionalAddress)?.length ? (
          <div STYLE="margin-top: 16px">
            <div STYLE="font-size: 14px; font-weight: 700; color: gray; margin-bottom: 4px">
              Found in locations
            </div>
            <div STYLE="display: flex; flex-wrap: wrap">
              {JSON.parse(RESPONSE?.additionalAddress)?.map((tag, i) => (
                <span
                  key={i}
                  STYLE="padding: 8px; background: #FEF9C3; color: #844D0F; border-radius: 8px; margin-right: 8px;"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {RESPONSE?.relatedPeople.length
          ? RESPONSE?.relatedPeople.map((platformData, i) =>
              Object.keys(platformData.details)?.length ? (
                <div STYLE="margin-top: 16px" key={i}>
                  <span STYLE="font-size: 14px; font-weight: 700; color: gray; margin-bottom: 4px; display: flex">
                    Possible connections on{"   "}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      STYLE="width: 28px; height: 28px; margin-left: 8px"
                      alt=""
                      src={ENUM_IMAGE_MAPPER[platformData?.platform]}
                    />
                  </span>
                  <div STYLE="display: flex; flex-wrap: wrap">
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
                            // className="w-12 h-12 text-gray-700"
                            STYLE="width: 56px; height: 56px; margin-right: 8px"
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
                          <div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              STYLE="width: 56px; height: 56px; border-radius: 30px; margin-right: 8px"
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
      <div STYLE="margin-top: 12px; padding-horizontal: 24px">
        {RESPONSE?.socialFootprint?.twitter?.length ? (
          <div STYLE="background: #F1F5F9; padding: 32px; border-radius: 30px; margin-bottom: 16px">
            <h3 STYLE="font-size: 24px; font-weight: 700; color: gray; margin-bottom: 4px">
              Twitter Footprints
            </h3>
            <div STYLE="display: flex; flex-wrap: wrap">
              {RESPONSE?.socialFootprint?.twitter.map((data, index) =>
                !data.profileUrl || data.profileUrl === "" ? (
                  <a target="__blank" href={data.url} key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      STYLE="width: 132px; height: 132px; border-radius: 100px; margin-right: 20px;"
                      alt=""
                      src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                    />
                    <div STYLE="background: #F77171; color: white; font-size: 12px; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; border-radius: 20px">{`${Math.ceil(data.confidenceScore)}%`}</div>
                  </a>
                ) : (
                  <a target="__blank" href={data.url} key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      STYLE="width: 132px; height: 132px; border-radius: 100px; margin-right: 20px;"
                      alt=""
                      src={data.profileUrl}
                    />
                    <div STYLE="background: #F77171; color: white; font-size: 12px; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; border-radius: 20px">{`${Math.ceil(data.confidenceScore)}%`}</div>
                  </a>
                )
              )}
            </div>
          </div>
        ) : null}
        {RESPONSE?.socialFootprint?.instagram?.length ? (
          <div STYLE="background: #F1F5F9; padding: 32px; border-radius: 30px; margin-bottom: 16px">
            <h3 STYLE="font-size: 24px; font-weight: 700; color: gray; margin-bottom: 4px">
              Instagram Footprints
            </h3>
            <div STYLE="display: flex; flex-wrap: wrap">
              {RESPONSE?.socialFootprint?.instagram.map((data, index) =>
                !data.profileUrl || data.profileUrl === "" ? (
                  <a target="__blank" href={data.url} key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      STYLE="width: 132px; height: 132px; border-radius: 100px; margin-right: 20px;"
                      alt=""
                      src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                    />
                    <div STYLE="background: #F77171; color: white; font-size: 12px; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; border-radius: 20px">{`${Math.ceil(data.confidenceScore)}%`}</div>
                  </a>
                ) : (
                  <a target="__blank" href={data.url} key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      STYLE="width: 132px; height: 132px; border-radius: 100px; margin-right: 20px;"
                      alt=""
                      src={data.profileUrl}
                    />
                    <div STYLE="background: #F77171; color: white; font-size: 12px; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; border-radius: 20px">{`${Math.ceil(data.confidenceScore)}%`}</div>
                  </a>
                )
              )}
            </div>
          </div>
        ) : null}
        {RESPONSE?.socialFootprint?.facebook?.length ? (
          <div STYLE="background: #F1F5F9; padding: 32px; border-radius: 30px; margin-bottom: 16px">
            <h3 STYLE="font-size: 24px; font-weight: 700; color: gray; margin-bottom: 4px">
              Facebook Footprints
            </h3>
            <div STYLE="display: flex; flex-wrap: wrap">
              {RESPONSE?.socialFootprint?.facebook.map((data, index) =>
                !data.profileUrl || data.profileUrl === "" ? (
                  <a target="__blank" href={data.url} key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      STYLE="width: 132px; height: 132px; border-radius: 100px; margin-right: 20px;"
                      alt=""
                      src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                    />
                    <div STYLE="background: #F77171; color: white; font-size: 12px; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; border-radius: 20px">{`${Math.ceil(data.confidenceScore)}%`}</div>
                  </a>
                ) : (
                  <a target="__blank" href={data.url} key={index}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      STYLE="width: 132px; height: 132px; border-radius: 100px; margin-right: 20px;"
                      alt=""
                      src={data.profileUrl}
                    />
                    <div STYLE="background: #F77171; color: white; font-size: 12px; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; border-radius: 20px">{`${Math.ceil(data.confidenceScore)}%`}</div>
                  </a>
                )
              )}
            </div>
          </div>
        ) : null}
        {RESPONSE?.informationFootprint.length ? (
          <div STYLE="background: #F1F5F9; padding: 32px; border-radius: 30px; margin-bottom: 16px">
            <h3 STYLE="font-size: 24px; font-weight: 700; color: gray; margin-bottom: 4px">
              Related Links
            </h3>
            <div>
              {RESPONSE?.informationFootprint.map((link, i) => (
                <a
                  target="__blank"
                  key={i}
                  STYLE="display: flex; text-decoration: underline"
                >
                  {link.url}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
