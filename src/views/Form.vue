<template>
  <div class="form__wrapper">    
    <div class="form">
      <!-- PERSON -->
      <div class="form__content form__content_person">
        <div class="form__content-section form__content-section_desc">
          <span class="form__content-subject">
            Персональные данные
          </span>
        </div>
        <div class="form__content-section form__content-section_person">
          <BaseInput 
            v-model="inputValueFullNameUser"
            :inputValue="inputValueFullNameUser" 
            :labelText="labelFullNameUser"
            :placeholder="placeholderFullNameUser"
             
            :textError="this.user.errorName.state ? this.user.errorName.errorMessage : ''"
            :error="this.user.errorName.state"
            :success="this.user.successName"
          />
          <BaseInput 
            v-model="inputValueAgeUser"
            :inputValue="inputValueAgeUser"
            :labelText="labelAgeUser"
            :placeholder="placeholderAgeUser"

            :textError="this.user.errorAge.state ? this.user.errorAge.errorMessage : '' "
            :error="this.user.errorAge.state"
            :success="this.user.successAge"
          />
        </div>
      </div>
      <!-- CHILDREN -->
      <div class="form__content form__content_children">
        <div class="form__content-section form__content-section_desc">
          <span class="form__content-subject">
            Дети (макс. 5)
          </span>
          <BtnSecond 
            :svgSrc="svgPlus"
            :btnText="btnSecondName"
            @click="setChildrenInList"
            :disableBtn="getChildrenList.length > 4 ? true : false"
          />
        </div>
        <!-- CHILDREN FORM -->
        <div class="form__content-section form__content-section_children">
          <BaseChildrenForm 
            v-for="(child, index) in getChildrenList"
            :key="child.id"
            :index="index"
            :textErrorName="child.errorName.state ? child.errorName.errorMessage : ''"
            :errorName="child.errorName.state"
            :successName="child.successName"
            :textErrorAge="child.errorAge.state ? child.errorAge.errorMessage : ''"
            :errorAge="child.errorAge.state"
            :successAge="child.successAge"
          />
        </div>
      </div>
      <BtnPrimary 
        @click="saveForm()"
        :btnText="btnPrimaryName"
      />
    </div>
  </div>
</template>

<script>
import BtnSecond from '@/components/BtnSecond.vue'
import BtnFlat from '@/components/BtnFlat.vue'
import BtnPrimary from '@/components/BtnPrimary.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseChildrenForm from '@/components/BaseChildrenForm.vue'

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Form',
  components: {
    BtnFlat,
    BtnSecond,
    BtnPrimary,
    BaseInput,
    BaseChildrenForm
  },

  data: () => ({
    svgPlus: require('@/assets/svg/plus.svg'),
    btnSecondName: 'Добавить ребенка',
    btnFlatName: 'Удалить',
    btnPrimaryName: 'Сохранить',

    labelAgeUser: 'Возраст',
    labelFullNameUser : 'Фамилия Имя Отчество',
    placeholderAgeUser: 'Введите возраст',
    placeholderFullNameUser: 'Иванов Иван Иванович',
  }),

  computed: {
    ...mapState('form/', {
      user: state => state.user,
    }),
    ...mapGetters('form/', {
      getFullNameUser: 'GET_USER_NAME',
      getAgeUser: 'GET_USER_AGE',
      
      getChildrenList: 'GET_CHILDREN_LIST'
    }),
   
   
    inputValueFullNameUser: {
      get () {
        return this.getFullNameUser
      },
      set (value) {
        this.setFullNameUser(value)
      
      }
    },
    inputValueAgeUser: {
      get () {
        return this.getAgeUser
      },
      set (value) {
        this.setAgeUser(value)
      }
    },
  },

  methods: {
     ...mapActions('form/', {
      validations: 'VALIDATION',
    }),
    ...mapMutations('form/', {
      setFullNameUser: 'SET_USER_NAME',
      setAgeUser: 'SET_USER_AGE',
      setChildrenInList: 'SET_CHILDREN_IN_LIST'
    }),

    async saveForm() {
      const isValidate = await this.validations()
      if (isValidate) {
        return this.$router.push({ name: 'Preview' })
      }
    }
  } 
}
</script>


<style lang="scss" scoped>
span {
  font-family: 'Montserrat-Medium';
  color: $black;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  @media ($mobile) {
    font-size: 14px;
  }
}
.form {
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
      margin: 33px 0 30px 0;
      &>.form__content-section_desc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
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
}
</style>