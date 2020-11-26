<template>
    <div class="page-wrapper">
        
        <user-header :user-info="details" />

        <div class="bio">{{ details.bio }}</div>

        <nuxt-link :to="`${details.login}/repos`">
            <div class="orange-button">Repositories</div>
        </nuxt-link>

        <div class="orange-button">
           <a :href="details.url">Github Profile</a>
        </div>
    </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue';

export default {
    components: {
        UserHeader
    },
    asyncData({ params, error, $http }) {
        const { username } = params;
        return $http.$get(`/api/users/${username}/details`)
            .then(res => {
                return { details: res };
            })
            .catch(err => {
                console.log(err);
                return { status: 404, message: "User Not Found" };
            });
    }
}
</script>


<style lang="scss">
.page-wrapper {
    width: 70%;
    padding: 1em;
    display: block;

   .bio {
       width: 100%;
       padding: 2em;
       font-family: Arial, Helvetica, sans-serif, monospace;
       font-size: 14pt;
       letter-spacing: 1px;
   }

   .link {
       font-family: 'Times New Roman', Times, serif;
       font-size: 16pt;
       text-align: center;
       width: 100%;
       padding: 1em;
   }

   .orange-button {
        padding: 1em .6em;
        border: 1px solid orangered;
        color: orangered;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        width: fit-content;
        height: fit-content;
        border-radius: 10px;
        margin: .6em auto;
        a {
            text-decoration: none;
            color: orangered;
        }
        &:hover {
            border: 1px solid white;
            color: white;
            a {
                color: white;
            }
            background-color: orangered;
        }
    }
}
</style>