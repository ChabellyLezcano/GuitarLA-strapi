module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: "deyrxoyqt",
        api_key: "492939474484282",
        api_secret: "UTjGOeGsqsxTCbwzegE0dgIIJ4k",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});