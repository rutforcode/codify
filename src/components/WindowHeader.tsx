import React from "react";
import { createStyles, Divider, IconButton, Theme } from "@material-ui/core";
import cx from "classnames";
import { green, grey, red, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuSwap,
  WindowMinimize,
  SquareOutline,
  WindowClose,
  CloseCircle,
} from "mdi-material-ui";

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    macOS: {
      backgroundColor: grey[300],
      backgroundImage: `linear-gradient(to bottom, #cecece, #b7b7b7)`,
      padding: spacing(1),
    },
    windows10: {
      backgroundColor: "#fff",
      justifyContent: "flex-end",
    },
    linuxMint: {
      backgroundImage: `linear-gradient(to right, #444444, #303030)`,
      justifyContent: "flex-end",
      padding: spacing(0.5),
    },
    macOSDivider: {
      backgroundColor: "#141414",
    },
    macButton: {
      padding: spacing(0.25),
    },
    mintDivider: {
      backgroundColor: "#141414",
    },
    windowsDivider: {
      backgroundColor: grey[300],
    },
    dot: {
      borderRadius: "50%",
      margin: spacing(0.3),
      height: spacing(1.125),
      width: spacing(1.125),
    },
    green: {
      backgroundColor: green[500],
    },
    yellow: {
      backgroundColor: yellow[800],
    },
    red: {
      backgroundColor: red[500],
    },
    square: {
      borderRadius: 0,
    },
    spaceMint: {
      display: "flex",
      justifyContent: "space-between",
      width: spacing(10),
    },
    spaceWindows: {
      display: "flex",
      justifyContent: "space-between",
      width: spacing(14),
    },
  })
);

interface Props {
  className?: string;
  variant?: "macOS" | "windows10" | "linuxMint";
}

const WindowHeader = ({ className, variant }: Props) => {
  const classes = useStyles();

  switch (variant) {
    case "macOS":
      return (
        <div className={cx(classes.root, classes.macOS, className)}>
          <IconButton className={classes.macButton}>
            <div className={cx(classes.dot, classes.red)} />
          </IconButton>
          <IconButton className={classes.macButton}>
            <div className={cx(classes.dot, classes.yellow)} />
          </IconButton>
          <IconButton className={classes.macButton}>
            <div className={cx(classes.dot, classes.green)} />
          </IconButton>
        </div>
      );
    case "windows10":
      return (
        <>
          <div className={cx(classes.root, classes.windows10, className)}>
            <div className={classes.spaceWindows}>
              <IconButton size={"small"} className={classes.square}>
                <WindowMinimize style={{ fontSize: 18 }} />
              </IconButton>
              <IconButton size={"small"} className={classes.square}>
                <SquareOutline style={{ fontSize: 16 }} />
              </IconButton>
              <IconButton size={"small"} className={classes.square}>
                <WindowClose style={{ fontSize: 18 }} />
              </IconButton>
            </div>
          </div>
          <Divider className={classes.windowsDivider} />
        </>
      );
    case "linuxMint":
      return (
        <>
          <div className={cx(classes.root, classes.linuxMint, className)}>
            <div className={classes.spaceMint}>
              <IconButton size={"small"}>
                <WindowMinimize
                  fontSize={"small"}
                  style={{ color: "#878787", fontSize: 14 }}
                />
              </IconButton>
              <IconButton size={"small"}>
                <MenuSwap
                  fontSize={"small"}
                  style={{
                    color: "#878787",
                    fontSize: 18,
                    transform: `rotate(45deg)`,
                  }}
                />
              </IconButton>
              <IconButton size={"small"}>
                <CloseCircle style={{ color: "#78b375", fontSize: 14 }} />
              </IconButton>
            </div>
          </div>
          <Divider className={classes.mintDivider} />
        </>
      );
    default:
      return <div className={cx(classes.root, className)} />;
  }
};

export default WindowHeader;
