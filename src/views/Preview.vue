<template>
  <div class="preview__wrapper">    
    <div class="preview">
      <!-- PERSON -->
      <div class="preview__content preview__content_person">
        <div class="preview__content-section preview__content-section_desc">
          <span class="preview__content-subject">
            Персональные данные
          </span>
        </div>
            <!-- user -->
        <div class="preview__content-section preview__content-section_person">
          <span class="preview__content-item preview__content-item_person">
            {{ user.name }}, {{ user.age }} {{ this.getPlural(user.age) }}
          </span>
        </div>
      </div>
      <!-- CHILDREN -->
      <div class="preview__content preview__content_children" v-if="Boolean(this.childrenList.length)">
        <div class="preview__content-section preview__content-section_desc">
          <span class="preview__content-subject">
            Дети (макс. 5)
          </span>
          <!-- children -->
          <div 
            class="preview__content-item-wrapper"
            v-for="child in childrenList"
            :key="child.id"
          >
            <span class="preview__content-item preview__content-item_children">
              {{ child.name }}, 
              {{ child.age }} 
              <span v-text="getPlural(child.age)"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data: () => ({

  }),

  mounted() {
    console.log(Boolean(this.childrenList.length))
  },
  computed: {
    ...mapState('form/',{
      user: state => state.user,
      childrenList: state => state.childrenList
    }),
    ...mapGetters('form/', {
      userAge: 'GET_USER_AGE',
    }),
  },

  methods: {
    getPlural(age) {
      if (Number(age) > 5 && Number(age) < 21) {
        return 'лет'
      }
      
      let arrAgeNumber = age.split('')
      let lastNumberOfAge = Number(arrAgeNumber[arrAgeNumber.length - 1])

      if (lastNumberOfAge === 1) {
        return 'год'
      } else if (lastNumberOfAge > 1 && lastNumberOfAge < 5) {
        return 'года'
      } else if (lastNumberOfAge > 4 || lastNumberOfAge === 0) {
        return 'лет'
      }
    },
  }
}
</script>


<style lang="scss" scoped>
.preview {
  margin: auto;
  max-width: 616px;
  text-align: left;
  
  @media ($mobile) {
    max-width: 100%; 
    padding: 0 30px;
  }
  &__wrapper {
    justify-self: flex-start;
    width: 100%;
    height: 100%;
    margin: 30px 0 0 0;
  }
  
  &__content {
    width: 100%;
    height: 100%;
    
    &_children {
      margin: 60px 0 30px 0;
      &>.form__content-section_desc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
      }
    }

    &-subject {
      font-family: 'Montserrat-Medium';
      color: $black;
      font-size: 16px;
      line-height: 24px;
      text-align: left;
      @media ($mobile) {
        font-size: 14px;
      }
    }
  }

  &__content-section {
    
    &_desc {
      margin: 0px 0 20px;
      width: 100%;
      position: relative;
    }

    &_person {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;  
    }

    &_children {
      width: 100%;
      height: 100%;
    }
  }

  &__content-item {
    font-family: 'Montserrat-Bold';
    font-size: 16px;
    line-height: 24px;

    color: $black;

    &-wrapper {
      padding: 10px 20px;
      background: $lightGray; 
      width: fit-content;
      margin: 20px 0;
    }
  }
}
</style>