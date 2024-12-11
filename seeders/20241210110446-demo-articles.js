'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, ex ut iaculis volutpat, dolor tortor ultrices metus, quis congue ligula elit sed sem. Curabitur placerat justo nibh, eu convallis erat dapibus non. Suspendisse sollicitudin est id eros ornare, et pulvinar metus vehicula. Cras laoreet, mi volutpat hendrerit egestas, elit felis dapibus turpis, eleifend aliquam dolor ipsum id nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus hendrerit sem dui. Suspendisse ut velit eu nunc volutpat faucibus at gravida metus. Nullam sed aliquam mauris, a luctus lorem. Aliquam gravida non nisi et placerat. Cras lacinia tincidunt gravida. Nunc sit amet diam ac libero tincidunt ultricies quis tristique libero. Quisque hendrerit enim ac libero mattis consequat et sed ex. Maecenas vel tincidunt nibh. Praesent metus leo, vestibulum id vulputate eget, congue ac est. In finibus ullamcorper sagittis. </p>',
        published:'2020-01-08 15:02:30',
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Morning Vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, ex ut iaculis volutpat, dolor tortor ultrices metus, quis congue ligula elit sed sem. Curabitur placerat justo nibh, eu convallis erat dapibus non. Suspendisse sollicitudin est id eros ornare, et pulvinar metus vehicula. Cras laoreet, mi volutpat hendrerit egestas, elit felis dapibus turpis, eleifend aliquam dolor ipsum id nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus hendrerit sem dui. Suspendisse ut velit eu nunc volutpat faucibus at gravida metus. Nullam sed aliquam mauris, a luctus lorem. Aliquam gravida non nisi et placerat. Cras lacinia tincidunt gravida. Nunc sit amet diam ac libero tincidunt ultricies quis tristique libero. Quisque hendrerit enim ac libero mattis consequat et sed ex. Maecenas vel tincidunt nibh. Praesent metus leo, vestibulum id vulputate eget, congue ac est. In finibus ullamcorper sagittis. </p>',
        published:'2020-04-14 15:02:41',
        author_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, ex ut iaculis volutpat, dolor tortor ultrices metus, quis congue ligula elit sed sem. Curabitur placerat justo nibh, eu convallis erat dapibus non. Suspendisse sollicitudin est id eros ornare, et pulvinar metus vehicula. Cras laoreet, mi volutpat hendrerit egestas, elit felis dapibus turpis, eleifend aliquam dolor ipsum id nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus hendrerit sem dui. Suspendisse ut velit eu nunc volutpat faucibus at gravida metus. Nullam sed aliquam mauris, a luctus lorem. Aliquam gravida non nisi et placerat. Cras lacinia tincidunt gravida. Nunc sit amet diam ac libero tincidunt ultricies quis tristique libero. Quisque hendrerit enim ac libero mattis consequat et sed ex. Maecenas vel tincidunt nibh. Praesent metus leo, vestibulum id vulputate eget, congue ac est. In finibus ullamcorper sagittis. </p>',
        published:'2020-05-28 15:02:55',
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
