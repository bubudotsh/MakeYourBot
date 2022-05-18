menu () {
    echo "1 - make your bot"
    echo "2 - instal request"
    echo "3 - initialise"   
}

cmdslist () {
    echo "chose your commands to add at your bot : "
    echo "1 - addrole"
    echo "2 - ban"
    echo "3 - bot info"
    echo "4 - clear"
}

createbot () {
    echo "Name of bot : "
    read namebot
    echo "prefix of your bot :"
    read prefixbot
    sed -s -i "s/pref/${prefixbot}/g" data/template/config.json
    cmdslist
    read cmds
    while :
    do
        if [ $cmds -eq 5 ] 2> /dev/null; then
            break
        fi

        if [ -f data/cmds/${cmds}.js ]
        then
            cp data/cmds/${cmds}.js botgen/${cmds}.js
            echo "your add ${cmds}.js"
        else
            echo "ERROR"
        fi
        cmdslist
        read cmds
    done
}

engine () {
    menu
    read choice
    if [ $choice -eq "1" ] ; then
        createbot
    fi
}

engine