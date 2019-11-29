import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactYoutube from "react-youtube";
import "./youtube.css";

const validImageSizes = ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"];

class Youtube extends Component {
  state = { showVideo: false };

  renderVideo = () => this.setState(({ showVideo }) => ({ showVideo: true }));

  render = () => {
    const {
      id,
      onPlay,
      onPause,
      onEnd,
      onError,
      onStateChange,
      onPlaybackRateChange,
      onPlaybackQualityChange,
      imageSize,
      opts,
      noCookies,
      className,
      ...props
    } = this.props;

    const { showVideo } = this.state;

    const image = () => (validImageSizes.includes(imageSize) ? imageSize : "default");

    return (
      <div className={`react-youtube-lazy-videoWrapper ${className}`} {...props}>
        {showVideo ? (
          <ReactYoutube
            className="react-youtube-lazy-video"
            videoId={id}
            onReady={e => e.target.playVideo()}
            onPlay={onPlay}
            onPause={onPause}
            onEnd={onEnd}
            onError={onError}
            onStateChange={onStateChange}
            onPlaybackRateChange={onPlaybackRateChange}
            onPlaybackQualityChange={onPlaybackQualityChange}
            opts={{
              width: "100%",
              host: noCookies ? "https://www.youtube-nocookie.com" : "https://www.youtube.com",
              ...opts
            }}
          />
        ) : (
          <React.Fragment>
            <button className="react-youtube-lazy-playBtn" onClick={this.renderVideo} aria-label="Play Video" />
            <img
              className="react-youtube-lazy-thumbnail"
              onClick={this.renderVideo}
              src={`https://img.youtube.com/vi/${id}/${image()}.jpg`}
              alt="video"
            />
          </React.Fragment>
        )}
      </div>
    );
  };
}

export default Youtube;

Youtube.defaultProps = {
  onPlay: () => {},
  onPause: () => {},
  onEnd: () => {},
  onError: () => {},
  onStateChange: () => {},
  onPlaybackRateChange: () => {},
  onPlaybackQualityChange: () => {},
  imageSize: "default",
  opts: {},
  noCookies: false
};

Youtube.propTypes = {
  /** ID of the youtube video to play . */
  id: PropTypes.string.isRequired,
  /** Function to run when the video starts Playing */
  onPlay: PropTypes.func,
  /** .Function that runs when the video is paused */
  onPause: PropTypes.func,
  /** . Function that runs on the end of the video */
  onEnd: PropTypes.func,
  /** .Function that runs when the video encounters an error */
  onError: PropTypes.func,
  /** .Function that runs when the video changes state like from playing to paused */
  onStateChange: PropTypes.func,
  /** .Function that runs when the video encounters changes playback rater */
  onPlaybackRateChange: PropTypes.func,
  /** .Function that runs when the video changes quality */
  onPlaybackQualityChange: PropTypes.func,
  /** https://developers.google.com/youtube/player_parameters */
  opts: PropTypes.object,
  /** . Custom classname  */
  classname: PropTypes.string,
  /** .if set to true will change the host to  "https://www.youtube-nocookie.com" */
  noCookies: PropTypes.bool,
  /** .Size of the thumbnail we get from youtube */
  imageSize: PropTypes.oneOf(["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"])
};
