const { React } = window.PluginApi;

const Video = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <video
        controls
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      >
        <source
          src={process.env.STASH_ADDRESS + "/scene/4651/stream"}
          type="video/mp4"
        />
        <track
          src={process.env.STASH_ADDRESS + "/scene/4651/caption"}
          kind="captions"
        />
      </video>
    </div>
  );
};

export default Video;
