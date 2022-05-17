import { styled } from "stitches.config"

export const Box = styled("div", {
  variants: {
    fullWidth: {
      true: {
        width: "100%",
        maxWidth: "1140px",
        margin: "0 auto",
      },
    },
  },
})
