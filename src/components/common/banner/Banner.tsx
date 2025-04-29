import { Banner as IBanner } from "@/models/banner.model";
import { styled } from "styled-components";
import BannerItem from "./BannerItem";

interface Props {
  banners: IBanner[];
}

function Banner({ banners }: Props) {
  return (
    <BannerStyle>
      {banners.map((item, index) => (
        <BannerItem banner={item} />
      ))}
    </BannerStyle>
  );
}

const BannerStyle = styled.div``;

export default Banner;
