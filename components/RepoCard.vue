<template>
  <div class="repo-card-container">
    
    <div class="repo-top-content">
      <span id="lang">{{ data.language }}</span>
      <span id="repoId">{{ data.id }}</span>
    </div>

    <div class="repo-middle-1-content">
      <span id="repoName">{{ data.name }}</span>
    </div>

    <div class="repo-middle-2-content">
      <span v-if="data.description" id="repoName">{{ data.description }}</span>
    </div>

    <div class="repo-card-footer">
        <a :href="data.html_url" class="link-url">View on Github</a>
    </div>

  </div>
</template>

<script>
export default {
    props: [
        'data'
    ]
}
</script>

<style lang="scss">
.repo-card-container {
    max-width: 320px;
    width: 320px;
    height: 200px;
    padding: .8em;
    margin: 8px;
    border-radius: 4px;
    border: 1px solid #aaa;
    background-color: #fff;
    box-shadow: 0 0 10px #aaa;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        width: 100%;
    }

    .repo-top-content {
        display: flex;
        justify-content: space-between;
        #repoId {
            font-family: monospace;
            font-size: 11pt;
            letter-spacing: .001em;
            &::before {
                content: 'ID:';
            }
        }
    }

    .repo-middle-1-content { 
        width: 100%;
        text-align: center;
        #repoName {
            font-weight: 600;
            color: orangered;
        }
    }

    .repo-middle-2-content {
        font-size: 11pt;
        line-height: 1.2em;
        padding-block: .7em;
        font-family: 'Roboto', Helvetica, sans-serif;
    }

    .repo-card-footer {
        width: 100%;
        padding: .2em;
        text-align: center;
        a {
            text-decoration: none;
            color: orangered;
        }
    }
}
</style>