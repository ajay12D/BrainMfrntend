import { ShareIcon } from "../assets/icons/ShareIcon"
import { ContentModel } from "./ContentModel";

interface CardProps {
    title: String,
    type: 'youtube' | 'twitter',
    link: string
}

export const Card = (props: CardProps) => {
    const getYouTubeEmbedUrl = (link: string): string | undefined => {
        const shortMatch = link.match(/youtu\.be\/([^?]+)/);
        const longMatch = link.match(/v=([^&]+)/);
        const videoId = shortMatch?.[1] || longMatch?.[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
    };  // ------- the videon link used for embeding and the direct link both are different.

    return <div>
        <div className="bg-white rounded-lg   border-gray-2  00 shadow-md max-w-96  border p-4">
            <div className="flex justify-between"> 
                <div className="flex">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon />
                    </div>
                    <div className="font-medium">
                        {props.title}
                    </div>
                </div>
                <div className="flex">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className=" text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
            </div>
            <div className="pt-5">
                {props.type === 'youtube' && (
                    <iframe
                        width="90%"
                        height="60%"
                        src={getYouTubeEmbedUrl(props.link)}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
                {props.type == 'twitter' && <blockquote className="twitter-tweet" data-dnt="true" style={{ margin: '0 auto' }}><p lang="en" dir="ltr">It&#39;s pretty awesome how dancing makes robots less intimidating. Looking forward to seeing more nontrivial Machine Learning on these robots. Credit: Boston Dynamics. <a href="https://t.co/wnB2i9qhdQ">pic.twitter.com/wnB2i9qhdQ</a></p>&mdash; Reza Zadeh 🇺🇸 (@Reza_Zadeh) <a href={props.link.replace('x.com', 'twitter.com')}>December 29, 2020</a></blockquote>}
            </div>
        </div>
    </div>
}