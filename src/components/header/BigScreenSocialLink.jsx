import SocialLinks from "../../utils/HOC/SocialLinks";

const BigScreenSocialLink = ({ linkAnimate }) => {
  return (
    <div className={`${linkAnimate} hidden sm:block`}>
      <SocialLinks color="text-slate-400" linkGap="gap-4" myHover="hover:text-slate-200" />
    </div>
  );
};

export default BigScreenSocialLink;
