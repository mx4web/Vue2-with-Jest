import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Users from "@/components/Users";

const localVue = createLocalVue(); // create a localized Vue
localVue.use(Vuex);

describe("Users.vue", () => {
  describe("with a store", () => {
    let getters, actions, store;

    beforeEach(() => {
      getters = {
        usersList: () => [
          {
            name: "Michelle",
            email: "michelle@test.io"
          }
        ]
      };
      actions = {
        fetchUsers: jest.fn(),
        deleteUser: jest.fn()
      };
      store = new Vuex.Store({ getters, actions });
    });

    test("renders a user", () => {
      const wrapper = mount(Users, {
        store,
        localVue
      });

      expect(
        wrapper
          .find(".user-name")
          .text()
          .trim()
      ).toContain("Michelle");

      expect(
        wrapper
          .find(".user-email")
          .text()
          .trim()
      ).toContain("michelle@test.io");
    });
  });
});
