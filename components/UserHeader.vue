<template>
    <div class="user-page-header">
        <img :src="userInfo.avatar_url" :alt="userInfo.login + '\'s photo'" width="150"/>
        <div class="user-page-header-names">
            <p id="login">{{ userInfo.login }} <span id="_id">#{{ userInfo.id }}</span></p>
            <p id="full_name" v-if="userInfo.name">{{ userInfo.name }}</p>
            <p id="tt_username" v-if="userInfo.twitter_username">Twitter: @{{ userInfo.twitter_username }}</p>
            <div id="created_at">Joined to Github at {{ joinDate() }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'userInfo'
    ],
    methods: {
        joinDate() {
            let d = new Date(this.userInfo.created_at);
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${months[d.getMonth()]} ${d.getDay()+1}, ${d.getFullYear()}`
        }
    }
}
</script>

<style lang="scss">
 .user-page-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 2em;
    box-shadow: 1px 1px 4px #bbb;
    border-radius: 28px;
    img {
        width: 150px;
        border-radius: 50%;
    }
    .user-page-header-names {
        padding-inline: 2em;
        font-family: Arial, Helvetica, sans-serif;
        #_id {
            color: #0006;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 24px;
        }
        #login {
            font-weight: bold;
            font-size: 2em;
            color: orangered;
        }
        #full_name {
            color: #0009;
            padding-block: 8px;
        }
        #tt_username, #created_at {
            font-size: 13pt;
            margin-top: 10px;
        }
    }
}
</style>