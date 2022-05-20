from secrets import choice
import shutil
import os
import re
import platform
import time

def title () :
    menutext = """
 __  __       _     __     __              ____        _ 
|  \/  |     | |    \ \   / /             |  _ \      | |  
| \  / | __ _| | ____\ \_/ /__  _   _ _ __| |_) | ___ | |_ 
| |\/| |/ _` | |/ / _ \   / _ \| | | | '__|  _ < / _ \| __|
| |  | | (_| |   <  __/| | (_) | |_| | |  | |_) | (_) | |_ 
|_|  |_|\__,_|_|\_\___||_|\___/ \__,_|_|  |____/ \___/ \__|                                                  
    """
    print(menutext  + "\n")



############ Make bot function ############

def prefix_engine(botname, botprefix):
    reading_file = open("yourbot/" + botname + "/config.json", "r")
    new_file_content = ""

    for line in reading_file:
        stripped_line = line.strip()
        new_line = stripped_line.replace("prf", botprefix)
        new_file_content += new_line +"\n"

    reading_file.close()
    writing_file = open("yourbot/" + botname + "/config.json", "w")
    writing_file.write(new_file_content)
    writing_file.close()


def file_copy(botname):
    source_dir = r"data/template"
    destination_dir = r"yourbot/" + botname
    shutil.copytree(source_dir, destination_dir)

def clear():
    os_type = platform.system()

    if os_type == "Windows":
        os.system('CLS')
    else:
        os.system('clear')

def choose_cmds (types, botname):
    i = 0
    y = 0
    file = open('data/cmd_' + types + '.txt')
    content = file.readlines()
    len_file = len(content)

    print(types + " category:\n")

    while not (y == len_file):
        content_no = re.sub("\n", "", content[y])
        print(str((y + 1)) + " - " + content_no)
        y += 1

    cmds = input("\ntype number or enter to next (ex : 1,4,6) : ")

    nbvir = cmds.count(',')
    nblen = len(cmds) - nbvir
    cmd = re.sub(",", "", cmds)

    while not (i == nblen):
        commande_name = content[int(cmd[i]) - 1]
        commande_name = re.sub("\n", "", commande_name)
        shutil.copyfile("data/cmds/" + commande_name + ".js", "yourbot/" + botname + "/commands/" + commande_name + ".js")
        i += 1

def recap (botname, botprefix):
    print("So config of your bot :\n")
    print("name : " + botname)
    print("prefix : " + botprefix + "\n")
    print("your commands :\n")

    recap_dir = "yourbot/" + botname + "/commands"
    for x in os.listdir(recap_dir):
        if x.endswith(".js"):
            name_no = re.sub(".js", "", x)
            print(name_no)

    print("so, your bot is available in 'yourbot' directory")

def make_bot ():
    clear()
    title()
    print("name of yout bot :")
    botname = input()
    file_copy(botname)
    clear()
    title()
    print("prefix of your bot :")
    botprefix = input()
    prefix_engine(botname, botprefix)
    print("\nyour bot " + botname + " was create ! Now choose your commande\n")
    time.sleep(1.5)
    clear()
    title()
    a = 'fun'
    b = 'modo'
    c = 'info'
    d = 'bot_info'
    choose_cmds(a, botname)
    clear()
    title()
    choose_cmds(b, botname)
    clear()
    title()
    choose_cmds(c, botname)
    clear()
    title()
    choose_cmds(d, botname)
    clear()
    title()
    recap(botname, botprefix)







############ how lunch function ############

def bot_start ():
    clear()
    title()
    print("- Install NodeJs and npm")
    print("- Create token discord bot and replace 'lpm' with token in botconfig.json")
    print("- open terminal in your bot directory and type : npm start inde.js")
    bot_start_choice = input("\nenter 1 to back to menu : ")
    if bot_start_choice == '1':
        menu()
     






############ menu function ############

def menu ():
    clear()
    title()
    print("1 - create a new bot")
    print("2 - how to lunch my bot ?")
    print("3 - quitte\n")
    menu_choice = input("choose number : ")

    if menu_choice == '1':
        make_bot()
        recap()
    elif menu_choice == '2':
        bot_start()
    elif menu_choice == '3':
        return
    else:
        menu()

menu()