<template>
  <div class="page-wrapper">
    
    <dib class="header-title">
        <h1 id="title-page">
            List of {{ repoList.length }} public repositories of @{{ username }}
        </h1>
    </dib>

    <div class="repos-list-container">
        <ul>
            <li class="repo-item" v-for="repo in repoList" :key="repo">
                <repo-card :data="repo"/>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue';

export default {
    components: {
        RepoCard
    },
    data() {
        return {
            login: ''
        }
    },
    asyncData({ params, $http }) {
        let { username } = params;
        console.log(`${username}`);
        return $http.$get(`/api/users/${username}/repos`)
            .then(res => {
                return {repoList: res};
            })
            .catch(err => {
                console.log(err);
                return { status: 404, message: 'Erro on retrieve the repository info' };
            });
    } 
}
</script>

<style lang="scss">
.page-wrapper {
    width: 90%;
    height: fit-content;
    flex-direction: column;
}

.header-title {
    height: 100px;
    width: 100%;
    padding: 2em;
}

.repos-list-container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    ul {
        display: inline-block;
        justify-content: space-between;
        width: 100%;
        li.repo-item {
            list-style: none;
            width: 33%;
            display: inline-block;
        }
    }


}
</style>